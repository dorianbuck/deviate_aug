const { expect } = require("chai");
const AddressBook = require("../../src/js/AddressBook");

describe("AddressBook", () => {
  afterEach(() => {
    window.localStorage.clear();
  });
  subject(() => new AddressBook());
  def("contactsInStorage", () => JSON.parse(window.localStorage.data.contacts));
  def("validData", {
    name: "Dorian",
    phone: "555-555555",
    email: "dorianbuck@gmail.com",
  });

  it(() => is.expected.to.be.an("object"));
  it(() => is.expected.to.be.an.instanceOf(AddressBook));
  it(() => is.expected.to.respondTo("index"));
  it(() => is.expected.to.respondTo("create"));

  describe("#create", () => {
    let setItemSpy;
    before(() => {
      setItemSpy = sinon.spy(window.localStorage, "setItem");
    });

    context("with valid data", () => {
      def("response", () => $subject.create($validData));

      it("is expected to call on localStorage.setItem()", () => {
        $response;
        expect(setItemSpy).to.have.been.calledOnce;
      });
      it("is expected to add a contact to localStorage", () => {
        $response;
        expect($contactsInStorage).to.have.length(1);
      });
      it("is expected to return a sucess message", () => {
        expect($response).to.equal("the entry was added to the address book");
      });
    });
  });
});
