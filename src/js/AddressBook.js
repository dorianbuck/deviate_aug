class AddressBook {
  index() { }
  create(data) {
    let contacts = []
    contacts.push(data)
    window.localStorage.setItem('contacts', contacts)
    return "the entry was added to the address book"
  }
}

module.exports = AddressBook;
