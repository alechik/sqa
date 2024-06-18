class User {
    constructor(id, address, birthday_date, ci, email, gender, lastnames, names, userTypeId, picture, numero) {
        this.id = id;
        this.address = address;
        this.birthday_date = birthday_date;
        this.ci = ci;
        this.email = email;
        this.numero = numero;
        this.gender = gender;
        this.lastnames = lastnames;
        this.names = names;
        this.userTypeId = userTypeId;
        this.picture = picture;
    }

    toFirestore() {
        return {
            address: this.address,
            birthday_date: this.birthday_date,
            ci: this.ci,
            email: this.email,
            gender: this.gender,
            numero: this.numero,
            lastnames: this.lastnames,
            names: this.names,
            userTypeId: this.userTypeId,
            picture: this.picture
        };
    }
}

export { User };