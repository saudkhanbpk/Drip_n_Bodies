import React from 'react'

const FaqPage = () => {
  return (
    <>
    <div className="max-w-md mx-auto">
        <div className="bg-white p-4 rounded-md shadow-md">

            <div className="mb-4">
                <input type="checkbox" id="item1" className="hidden"/>
                <label htmlFor="item1" className="flex items-center justify-between cursor-pointer bg-gray-200 p-2 rounded-md">
                    <span>Accordion Item 1</span>
                    <span className="text-gray-600">+</span>
                </label>
                <div className="py-2 px-4">
                    <p>This is the content of Accordion Item 1.</p>
                </div>
            </div>

           
            <div className="mb-4">
                <input type="checkbox" id="item2" className="hidden"/>
                <label htmlFor="item2" className="flex items-center justify-between cursor-pointer bg-gray-200 p-2 rounded-md">
                    <span>Accordion Item 2</span>
                    <span className="text-gray-600">+</span>
                </label>
                <div className="py-2 px-4">
                    <p>This is the content of Accordion Item 2.</p>
                </div>
            </div>


        </div>
    </div>
    </>
  )
}

export default FaqPage