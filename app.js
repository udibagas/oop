"use strict";

class Employee {
  // private property
  #baseSalary;

  constructor(name, position, baseSalary, gender, joinYear) {
    // public property
    this.name = name;
    this.position = position;
    // private property
    this.#baseSalary = baseSalary;
    this.gender = gender;
    this.joinYear = joinYear;
  }

  calculateTakeHomePay() {
    const tax = 0.02 * this.#baseSalary;
    const bpjs = 300_000;
    const result = this.#baseSalary - tax - bpjs;
    return result;
  }

  // getter / accessor
  get baseSalary() {
    return this.#baseSalary;
  }

  set baseSalary(newSalary) {
    if (typeof newSalary !== "number") {
      throw new Error("Salary must be number");
    }

    if (newSalary < 5_000_000) {
      throw new Error("Gaji di bawah umr");
    }

    if (this.position === "Manager" && newSalary < 30_000_000) {
      throw new Error("Minimum salary for manager is 30mio");
    }

    this.#baseSalary = newSalary;
  }

  get nameWithTitle() {
    if (this.gender == "Male") {
      return `Mr. ${this.name}`;
    }

    return `Mrs. ${this.name}`;
  }

  get lengthOfWork() {
    return new Date().getFullYear() - this.joinYear;
  }

  // instance method
  getSalary() {
    return this.#baseSalary.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }

  get salaryInRupiah() {
    return this.#baseSalary.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }

  setSalary(newSalary) {
    this.#baseSalary = newSalary;
  }
}

class Manager extends Employee {
  constructor(name, baseSalary, gender, joinYear) {
    super(name, "Manager", baseSalary, gender, joinYear);
    this.bonus = 100_000_000;
  }

  get baseSalary() {
    return "Confidential";
  }

  set baseSalary(newSalary) {
    super.baseSalary = newSalary;
  }

  calculateTakeHomePay() {
    return super.calculateTakeHomePay() + this.bonus;
  }
}

class Staff extends Employee {
  constructor(name, baseSalary, gender, joinYear) {
    super(name, "Staff", baseSalary, gender, joinYear);
    this.overTime = 700_000;
  }

  lembur() {
    console.log(`Kerja keras bagai kuda`);
  }

  calculateTakeHomePay() {
    return super.calculateTakeHomePay() + this.overTime;
  }
}

const bagas = new Manager("Bagas", 50_000_000, "Male", 2020);
const hamzah = new Staff("Hamzah", 10_000_000, "Male", 2022);
bagas.baseSalary = 70_000_000;
// console.log(bagas.calculateTakeHomePay());
// bagas.lembur();
// console.log(bagas.calculateTakeHomePay());
// console.log(bagas.baseSalary);
console.log(hamzah.calculateTakeHomePay());
// hamzah.lembur();
