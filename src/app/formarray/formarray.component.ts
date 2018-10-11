import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';
@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent implements OnInit {
public fromMain:FormGroup;

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.fromMain = this.fb.group({
      contactName:this.fb.control('',[Validators.required]),
      email: this.fb.control('',[]),
      social: this.fb.group({
          facebook:this.fb.control(''),
          twitter:this.fb.control(''),
          website:this.fb.control(''),
      }),
      tels:this.fb.array([
        this.fb.group({
          phone:['',Validators.required],
          test:''
        })
      ])
    });
    // this.fromMain = new FormGroup({
    //   contactName : new FormControl('',[Validators.required]),
    //   email : new FormControl(),
    //   social : new FormGroup({
    //     facebook : new FormControl(),
    //     twitter : new FormControl(),
    //     website : new FormControl(),
    //   }),
    //   tel : new FormControl(),
    //   }
    // )
  }
  onSubmit(){
    console.log(this.fromMain.value);
  }
  get tels():FormArray{
    return this.fromMain.get('tels') as FormArray;
  }
  addTel(){
    this.tels.push( this.fb.group({
      phone:this.fb.control('',[Validators.required]),
      test:''
    }));
  }
  removeTel(index: number) {
    this.tels.removeAt(index);
  }
}
