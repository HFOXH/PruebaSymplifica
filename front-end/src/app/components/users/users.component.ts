import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ConexionService } from 'src/app/services/conexion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  test: any;
  idUser: any;

  constructor(private conexionService: ConexionService) { }

  ngOnInit(): void {
    this.conexionService.getUsers().subscribe((data:any)=>{
      this.users=data;
    });
  }
  
  deleteUser(User: any) {
    console.log(User);
    this.conexionService.deleteUser(User).subscribe(data => {
      this.users = this.users.filter((u: any) => u !== User);
    })
    Swal.fire(
      'Eliminado!',
      'El usuario se ha eliminado satisfactoriamente',
      'success'
    )
    window.location.reload();
  }
}
