'use client'
import React, { useState } from 'react';
import Navbar from '../info/components/Navbar'
import List from './components/List'

const tasks = () => {
    const [todoItem, setTodoItem] = useState<string>("");
    const [showAddItem, setShowAddItem] = useState(false); // State to toggle add item screen
    const [newItem, setNewItem] = useState(''); // State for the new item description
    

    const addItemToList = () => {
        setTodoItem(newItem); // Adjusted to set a single item, replacing the list
        setShowAddItem(false); // Hide add item screen after adding
        setNewItem(''); // Reset the input field
    };

    return (
        <div className='flex-col bg-stone-200 mx-auto px-36'>
            <Navbar/>
            <h1 className='bold-32 text-black py-6'>Mira's Birthday Tasks</h1>
            <div className='flex flex-row space-x-10 center pb-10'>
                <List description="To do" item={todoItem}/>
                <List description="Assigned/Doing"/>
                <List description="Done"/>
            </div>
            <div className='pb-6 flex justify-end'>
                <button onClick={() => setShowAddItem(true)} className="btn text-white bold-16 bg-black rounded-full">Add Item</button>
            </div>
            {showAddItem && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
                <h2 className="text-lg text-black font-bold mb-4">Add New Task</h2>
                <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="Item description" className="input input-bordered w-full mb-4 bg-stone-200 text-black font-sans-serif" />
                <div className="flex justify-between">
                    <button onClick={addItemToList} className="btn text-black bg-stone-200 hover:text-stone-200">Add</button>
                    <button onClick={() => setShowAddItem(false)} className="btn btn-outline btn-error">Cancel</button>
                </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default tasks