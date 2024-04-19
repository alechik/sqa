class User {
    constructor(id, address, birthday_date, ci, email, gender, lastnames, names, user_type_id, picture) {
        this.id = id;
        this.address = address;
        this.birthday_date = birthday_date;
        this.ci = ci;
        this.email = email;
        this.numero = numero;
        this.gender = gender;
        this.lastnames = lastnames;
        this.names = names;
        this.user_type_id = user_type_id;
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
            user_type_id: this.user_type_id,
            picture: this.picture
        };
    }
}

export { User };