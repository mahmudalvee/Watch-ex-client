import React from 'react';
import Footer from '../Home/Home/Shared/Footer/Footer';
import Navbar from '../Home/Home/Shared/Navbar/Navbar';

const Blog = () => {
    return (
        
        <div>
            <Navbar></Navbar>
      <div className=" mx-auto card w-8/12 mt-12 mb-6 bg-blue-800 text-primary-content">
        <div className="card-body">
          <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
          <ul>
            <li>Web Storage</li>
            <li>Local State</li>
            <li>Lifted State</li>
            <li>Derived State</li>
            <li>Using URL</li>
          </ul>
        </div>
      </div>
      <div className=" mx-auto card w-8/12 mb-6 bg-blue-800  text-primary-content">
        <div className="card-body">
          <h2 className="card-title">How does prototypical inheritance work?</h2>
          <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
        </div>
      </div>
      <div className=" mx-auto card w-8/12 mb-6 bg-blue-800  text-primary-content">
        <div className="card-body">
          <h2 className="card-title">3 What is a unit test? Why we need unit test?</h2>
          <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.</p>
          <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
        </div>
      </div>
      <div className=" mx-auto card w-8/12 mb-6 bg-blue-800  text-primary-content">
        <div className="card-body">
          <h2 className="card-title">React vs. Angular vs. Vue</h2>
          <p>React framework makes dynamic websites work seamlessly. React is an excellent choice for those just starting out with front-end JavaScript frameworks development and developers looking for more flexibility.</p>
          <p>Angular is the most mature framework among React and Vue. If your company has a large team and uses TypeScript, Angular might be a good solution.</p>
          <p>Vue - even though it has just started seems to be increasing significantly in the web development field by combining best features of Angular and React.</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
    );
};

export default Blog;