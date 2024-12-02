import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(updatedCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })

    }

    return (
        <div className='bg-[#F4F3F0] px-28 py-16 rounded-md mt-10 font-rancho container mx-auto'>
            <div className='flex flex-col gap-5 text-center mb-10'>
                <h2 className='text-5xl'>Update Coffee : {name} </h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>

            <form onSubmit={handleUpdateCoffee}>
                {/* form name and quantity row */}
                <div className='lg:flex md:flex gap-10 mb-5'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Coffee Name : {name} </span>
                        </label>
                        <label>
                            <input name='name' defaultValue={name} type="text" placeholder='Enter coffee name' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Available Quantity</span>
                        </label>
                        <label>
                            <input name='quantity' defaultValue={quantity} type="text" placeholder='Enter available quantity' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>

                {/* form supplier and taste row */}
                <div className='lg:flex md:flex gap-10 mb-5'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Supplier</span>
                        </label>
                        <label>
                            <input name='supplier' defaultValue={supplier} type="text" placeholder='Enter coffee supplier' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Taste</span>
                        </label>
                        <label>
                            <input name='taste' defaultValue={taste} type="text" placeholder='Enter coffee taste' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>

                {/* form category and details row */}
                <div className='lg:flex md:flex gap-10 mb-5'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Category</span>
                        </label>
                        <label>
                            <input name='category' defaultValue={category} type="text" placeholder='Enter coffee category' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Details</span>
                        </label>
                        <label>
                            <input name='details' defaultValue={details} type="text" placeholder='Enter coffee details' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>

                {/* form row */}
                <div className='flex gap-10 mb-5'>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Photo</span>
                        </label>
                        <label>
                            <input name='photo' defaultValue={photo} type="text" placeholder='Enter photo URl' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                {/* <button className="btn btn-block">block</button> */}
                <input className="btn btn-block bg-gray-700 text-white hover:text-black" type="submit" value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;