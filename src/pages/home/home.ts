import {Component} from '@angular/core';
import {ToastController} from 'ionic-angular';
import {Sim} from "@ionic-native/sim";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    gender = "";
    title = "";
    name = "";
    middle = "";
    surname = "";
    maidenname = "";
    birthday = "";
    marital = "";
    idtype = "";
    idnumber = "";
    language = "";
    education = "";
    nationality = "";
    profession = "";
    mobile = "";
    email = "";


    isTitle: boolean = false;
    isName: boolean = false;
    isSurname: boolean = false;
    isNationality: boolean = false;
    isProfession: boolean = false;
    isBirthDay: boolean = false;
    isMobile: boolean = false;


    simText="";
    hasReadPermission="";
    requestReadPermission="";
    constructor(public toastCtrl: ToastController, private sim: Sim) {

    }


    // onTitleChange(title) {
    //     if (title != "") {
    //         this.isTitle = false;
    //     }
    //     else {
    //         this.isTitle = true;
    //     }
    // }

    // onNameChange(name) {
    //     if (name != "") {
    //         this.isName = false;
    //     }
    //     else {
    //         this.isName = true
    //     }
    // }

    // onSurnameChange(surname) {
    //     if (surname != "") {
    //         this.isSurname = false;
    //     }
    //     else {
    //         this.isSurname = true;
    //     }
    // }

    // onNationalityChange(nationality) {
    //     if (nationality != "") {
    //         this.isNationality = false;
    //     } else {
    //         this.isNationality = true;
    //     }
    //
    // }

    // onProfessionChange(profession) {
    //     if (profession != "") {
    //         this.isProfession = false;
    //     } else {
    //         this.isProfession = true;
    //     }
    // }

    // onBirthdayChange(birthday) {
    //     // alert(birthday);
    //     if (birthday != "") {
    //         this.isBirthDay = false;
    //     }
    //     else {
    //         this.isBirthDay = true;
    //     }
    // }


    // onMobileChange(mobile) {
    //     if (mobile != "") {
    //         this.isMobile = false;
    //     }
    //     else {
    //         this.isMobile = true;
    //     }
    // }


    onUpdateProfile(form) {
        this.gender = form.value.gender;
        this.title = form.value.title;
        this.name = form.value.name;
        this.middle = form.value.middle;
        this.surname = form.value.surname;
        this.maidenname = form.value.maidenname;
        this.birthday = form.value.birthday;
        this.marital = form.value.marital;
        this.idtype = form.value.idtype;
        this.idnumber = form.value.idnumber;
        this.language = form.value.language;
        this.education = form.value.education;
        this.nationality = form.value.nationality;
        this.profession = form.value.profession;
        this.mobile = form.value.mobile;
        this.email = form.value.email;


        // if (this.title == "") {
        //     this.isTitle = true;
        //
        // }
        // if (this.title != "") {
        //     this.isTitle = false;
        // }
        // if (this.name == "") {
        //     this.isName = true;
        //
        // }
        // if (this.name != "") {
        //     this.isName = false;
        // }
        // if (this.surname == "") {
        //     this.isSurname = true;
        //
        // }
        // if (this.surname != "") {
        //     this.isSurname = false;
        // }
        // if (this.birthday == "") {
        //     this.isBirthDay = true;
        //
        // }
        // if (this.birthday != "") {
        //     this.isBirthDay = false;
        // }
        // if (this.nationality == "") {
        //     this.isNationality = true;
        //
        // }
        // if (this.nationality != "") {
        //     this.isNationality = false;
        // }
        // if (this.mobile == "") {
        //     this.isMobile = true;
        //
        // }
        // if (this.mobile != "") {
        //     this.isMobile = false;
        // }
        // if (this.profession == "") {
        //     this.isProfession = true;
        //
        // }
        // if (this.profession != "") {
        //     this.isProfession = false;
        // }

        if (this.title == "" || this.name == "" || this.surname == "" || this.birthday == "" || this.nationality == "" || this.mobile == "" || this.profession == "") {
            this.toasts();
        }
        else {
            alert("Your Profile Is Update");
        }

    }

    toasts() {
        const toast = this.toastCtrl.create(
            {
                message: 'some fields are missing',
                duration: 1500
            }
        )
        toast.present();
    }

}
