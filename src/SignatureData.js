class SignatureData {

    constructor(name, index, fullName, date, validDate, result) {
        this.name = name;
        this.index = index;
        this.fullName = fullName;
        this.date = date;
        this.validDate = validDate;
        this.result = result;
    }

    present() {
        return 'Rezultat podpisu :  ' + this.result + '\n' +
            'Nazwa użytkownika :  ' + this.name + '\n' +
            'Index :  ' + this.index + '\n' +
            'Imię i nazwisko :  ' + this.fullName + '\n' +
            'Data podpisania :  ' + this.date + '\n' +
            'Data ważności :  ' + this.validDate + '\n';
    }
}

const mysignature = new SignatureData("mmariusz", "x", "Mariusz Mariuszewski", Date.now(), Date.now(), "POPRAWNY");
mysignature.present();
