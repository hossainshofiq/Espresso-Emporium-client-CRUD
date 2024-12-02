import React from 'react';
import { FaEye, FaPen } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = id => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = coffees.filter(cof => cof._id !== _id);
                        setCoffees(remaining);
                    })
            }
        });
    }
    return (
        <div className="card card-side bg-[#F5F4F1] border mb-5">

            <figure>
                <img
                    src={photo}
                    alt="coffeePhoto" />
            </figure>
            <div className='flex justify-between w-full items-center'>
                <div className="card-body flex flex-col text-left justify-between">
                    <h2 className="card-title text-center text-purple-700">{name} </h2>
                    <p>{quantity} </p>
                    <p>{supplier} </p>
                    <p>{taste} </p>
                    <p>{category} </p>
                    <p>{details} </p>

                </div>
                <div>
                    <div className="join join-vertical space-y-5 pr-5">
                        <button className="btn text-xl rounded-lg bg-orange-300 text-white"><FaEye></FaEye> </button>
                        <Link to={`updateCoffee/${_id}`} className="btn text-xl rounded-lg bg-gray-800 text-white"><FaPen></FaPen></Link>
                        <button onClick={() => handleDelete(_id)} className="btn text-xl rounded-lg bg-red-500 text-white"><MdDeleteOutline></MdDeleteOutline> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;