
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NeedypeopleService } from 'src/app/needypeople/needypeople.service';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/Employee';
import { NeedyPeople } from '../model/NeedyPeople';

@Component({
  selector: 'list-needyperson',
  templateUrl: './list-needyperson.component.html',
  styles: [
  ]
})
export class ListNeedypersonComponent implements OnInit {

  needypeople: NeedyPeople[] = new Array<NeedyPeople>()
  constructor( private service: EmployeeService, private router: Router, private route: ActivatedRoute ) {
    this.route.data.subscribe(
      (data) => (this.needypeople = data['allNeedyPersonResolver'])
    );
  }

  ngOnInit(): void {

    if(!this.needypeople){
      this.service.listNeedyPerson().subscribe( data => this.needypeople = data);
    }

    /*let username = sessionStorage.getItem('username');
    if(username !==null){
    this.service.listNeedyPerson().subscribe(data=>{
      this.needypeople=data;
     },error=>{
       alert("there is some problem");
     })
    }
    else{
      alert('please login')
        this.router.navigate(['/login-admin']);
    }*/
  }

  editNeedyPerson(needypeople:NeedyPeople){

    this.router.navigate(['../edit-needy' ,needypeople.needyPersonId]);
  }

  deleteNeedyPerson(needypeople:NeedyPeople){
    alert('delete')
  this.service.deleteNeedyPerson(parseInt(needypeople.needyPersonName)).subscribe(data=>{
    this.service.listNeedyPerson().subscribe(data=>{
      this.needypeople =data;
    })
   },error=>{
     alert('problem deleting needyperson record');
   })
  }

  addNewNeedy() {
    this.router.navigate(['../add-needy']);
  }
}53
