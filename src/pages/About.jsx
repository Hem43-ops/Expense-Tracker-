import React from 'react'


function About() {
  return (
    <div className='min-h-screen bg-gray-100'>
        
        <section className='mx-auto max-w-5xl px-6 py-16'>
            <div className='mb-12 text-center'>
                <h1 className='text-4x1 font-bold text-gray-900'>
                    About Expense Tracker
                </h1>
                <p className='mt-4 text-lg text-gray-600'>
                    Take control of your money,one expense at a time
                </p>
                <p className="leading-7 text-gray-600">
                        Expense Tracker helps you record your daily spending,
                        understand your financial habits, and manage your
                        budget more effectively.
                    </p>

                    <p className="mt-4 leading-7 text-gray-600">
                        Whether you are tracking food, travel, shopping, or
                        education expenses, our goal is to make managing money
                        simple and organized.
                    </p>
            </div>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                    <div className="rounded-xl bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">
                            Track Expenses
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Record your spending in one place.
                        </p>
                    </div>
                    <div className="rounded-xl bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">
                            Understand Spending
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Identify where your money goes.
                        </p>
                    </div>

                    <div className="rounded-xl bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">
                            Plan Better
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Build better budgeting habits.
                        </p>
                    </div>
                    </div>
        </section>
    </div>
  );
}

export default About;