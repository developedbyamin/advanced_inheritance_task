class MyClass {
    // Private fields
    #privateField1;
    #privateField2;
    
    // Static property to count instances
    static instanceCount = 0;
  
    constructor(privateField1, privateField2) {
      // Validation and initialization of private fields
      this.setPrivateField1(privateField1);
      this.setPrivateField2(privateField2);
  
      // Increment instance count
      MyClass.instanceCount++;
    }
  
    // Static method to retrieve instance count
    static getInstanceCount() {
      return MyClass.instanceCount;
    }
  
    // Static methods
    static staticMethod1() {
      console.log('Executing staticMethod1');
      // Perform operations related to the class but not specific instances
    }
  
    static staticMethod2() {
      console.log('Executing staticMethod2');
      // Perform operations related to the class but not specific instances
    }
  
    // Instance method to get private fields
    getPrivateFields() {
      return {
        privateField1: this.#privateField1,
        privateField2: this.#privateField2
      };
    }
  
    // Instance method to set privateField1 with validation
    setPrivateField1(value) {
      // Example validation: Ensure value is a number
      if (typeof value !== 'number') {
        throw new Error('privateField1 must be a number');
      }
      this.#privateField1 = value;
    }
  
    // Instance method to set privateField2 with validation
    setPrivateField2(value) {
      // Example validation: Ensure value is a string
      if (typeof value !== 'string') {
        throw new Error('privateField2 must be a string');
      }
      this.#privateField2 = value;
    }
  }
  
  // Example usage:
  try {
    const instance1 = new MyClass(10, 'Hello');
    console.log('Instance 1 private fields:', instance1.getPrivateFields());
  
    const instance2 = new MyClass(20, 'World');
    console.log('Instance 2 private fields:', instance2.getPrivateFields());
  
    console.log('Instance count:', MyClass.getInstanceCount());
  
    // Accessing private fields directly will throw an error
    // console.log(instance1.#privateField1); // Error: Private field '#privateField1' must be declared in an enclosing class
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  // Calling static methods
  MyClass.staticMethod1();
  MyClass.staticMethod2();
  