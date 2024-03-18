class UserType {
  constructor(id, description, name) {
    this.id = id;
    this.description = description;
    this.name = name;
  }

  toFirestore() {
    return {
      description: this.description,
      name: this.name
    };
  }
}

export { UserType };