import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import './Programmer.css';

const Programmer = (props) => {
    // console.log(props);

    const { name, age, skill, country, salary, img } = props.programmer;
    const element = <FontAwesomeIcon icon={faUserPlus} />
    const element1 = <FontAwesomeIcon icon={faAddressCard} />
    return (

        <div className="col-4 my-2">
            <div className="card card-style">
                <div className="text-center" >
                    <img src={img} alt="" />
                </div>
                <h4>{name}</h4>
                <p>
                    <span className="txt">Age:</span>  {age}
                    <br />
                    <span className="txt">Skill:</span> {skill}
                    <br />
                    <span className="txt">Country:</span> {country}
                    <br />
                    <span className="txt">Salary:</span> ${salary}
                    <br />
                    <div className="d-flex justify-content-between">
                        <button
                            onClick={() => props.handleAddToCart(props.programmer)}
                            className="btn btn-warning mt-2">{element} Select</button>
                        <span className="element1">{element1}</span>
                    </div>


                </p>

            </div>

        </div>
    );
};

export default Programmer;