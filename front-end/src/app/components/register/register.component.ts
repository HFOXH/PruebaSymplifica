import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ConexionService } from 'src/app/services/conexion.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registroUser: FormGroup;
  nombre: any;
  ciudad: any;
  numero: any;
  
  constructor(private formBuilder: FormBuilder,private conexionService: ConexionService,private router: Router) {
    this.registroUser = this.formBuilder.group({
      inpNombre: ['', [Validators.required, Validators.maxLength(40)]],
      selCiudad: ['', [Validators.required]],
      inpNumero: [null, [Validators.required, this.validateMaxDigits(10)]]
    });
   }
  ngOnInit(): void {
  }
  validateMaxDigits(maxDigits: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value === null || control.value === undefined || control.value === '') {
        return null; 
      }
      const valueAsString = control.value.toString();
      if (valueAsString.length > maxDigits) {
        return { 'maxDigitsExceeded': true }; 
      }
      return null; 
    };
  }
  addUser(){
    let data = {
      nombre: this.registroUser.get('inpNombre').value,
      ciudad: this.registroUser.get('selCiudad').value,
      numero: this.registroUser.get('inpNumero').value
    }
    this.conexionService.postUser(data).subscribe((res: any) => {
      Swal.fire(
        'Registrado!',
        'Te acabas de registrar exitosamente',
        'success'
      ).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/users']);
        }
      });
    }, (err) => {
      console.log(err);
    });
    //console.log(data);
  }
}
