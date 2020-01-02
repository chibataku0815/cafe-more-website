import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  formGroup: FormGroup;
  isSend = false;

  customErrorMessages: any = [
    {
      error: 'required',
      format: (label, error) => `${label.toUpperCase()} は必須項目です`
    }, {
      error: 'pattern',
      format: (label, error) => `${label.toUpperCase()} 入力された形式が違います`
    }
  ];

  ngOnInit() {
    this.formGroup = new FormGroup({
      Name: new FormControl(''),
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      DetailContent: new FormControl('')
    });
  }

  showToggle() {
    if (this.isSend) {
      this.isSend = false;
    }
  }

  onSubmit() {
    console.log(this.formGroup);
    const url = environment.slackWebHooks;
    const data = {
      type: 'mrkdwn',
      text: `@here Cafe More Webサイトからのお問合せ \n 名前: ${this.formGroup.value.Name} \n メールアドレス${this.formGroup.value.Email} \n お問い合せ内容: ${this.formGroup.value.DetailContent} \n `
    };
    const xml = new XMLHttpRequest();
    xml.open('POST', url, false);
    xml.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    xml.send(`payload=${JSON.stringify(data)}`);

    this.isSend = true;
  }

}
