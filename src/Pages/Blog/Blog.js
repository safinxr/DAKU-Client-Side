import React from 'react';

const Blog = () => {
    return (
        <div className="my-5 py-5 container shadow-lg">
            <h2 className="text-center mb-5 text-info">Questions</h2>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                        >
                            How will you improve the performance of a React Application?
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body">
                            <li>Keeping component state local where necessary.
                            </li>
                            <li>Memoizing React components to prevent unnecessary re-renders.</li>
                            <li>Code-splitting in React using dynamic import()</li>
                            <li>Windowing or list virtualization in React.</li>
                            <li>Lazy loading images in React.</li>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                        >
                            What are the different ways to manage a state in a React application?

                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body">
                            <li>Local state.</li>
                            <li>Global state.</li>
                            <li>Server state.</li>
                            <li>URL state.</li>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                        >
                            How does prototypical inheritance work?
                        </button>
                    </h2>
                    <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body">
                            Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour"
                            aria-expanded="false"
                            aria-controls="flush-collapseFour"
                        >
                            What is a unit test? Why should write unit tests?
                        </button>
                    </h2>
                    <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body">
                            Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFive">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFive"
                            aria-expanded="false"
                            aria-controls="flush-collapseFive"
                        >
                            You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                        </button>
                    </h2>
                    <div
                        id="flush-collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFive"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body">
                        I will create a function that will take two parameters (product, search text). Now I will empty it with a variable called result. Then I will run a loop with the product from among the products. I will push in the result variable. Such as: - result.push (product); Now I will call him by any name from below such as: - Search product (product, 'iphone11'); Then he will give the whole array of that name.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;