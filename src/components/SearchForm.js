import React from 'react'

export default function SearchForm({ search, handleInputChange, breeds, handleFormSubmit}) {
    return (
        <form className='search'>
            <div className='form-group'>
                <label htmlFor='breed'>Breed Name:</label>
                <input
                value={search}
                onChange={handleInputChange}
                list='breeds'
                type='text'
                className='form-control'
                placeholder='enter the breed of pup'
                id='breed'
                />
                <datalist id='breeds'>
                    {breeds.map((breed) => (
                        <option value={breed} key={breed} />
                    ))}
                </datalist>
                <button
                type='submit'
                onClick={handleFormSubmit}
                className='btn btn-success'
                >
                    Search
                </button>
            </div>
        </form>
    )
}
