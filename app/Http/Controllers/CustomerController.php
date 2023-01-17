<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class CustomerController extends Controller
{
    /**
     * list of all customers
     *
     * @return void
     * @author BV
     */
    public function index()
    {
        $customers = Customer::all();

        return Inertia::render('Customer/Index', [
            'customers' => $customers,
        ]);
    }

    /**
     * create customer
     *
     * @return void
     * @author BV
     */
    public function create()
    {
        return Inertia::render('Customer/Create');
    }

    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void
     * @author BV
     */
    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name'  => 'required|string|max:255',
            'email'      => 'required|string|max:255|unique:customers,email',
            'age'        => 'required',
        ]);

        Customer::create([
            'first_name' => $request->first_name,
            'last_name'  => $request->last_name,
            'email'      => $request->email,
            'age'        => $request->age,
        ]);
        sleep(1);

        return redirect()->route('customers.index')
            ->with('message', 'Customer Created Successfully');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function edit(Customer $customer)
    {
        return Inertia::render('Customer/Edit', [
            'customer' => $customer,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Customer $customer)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name'  => 'required|string|max:255',
            'email'      => 'required|string|max:255|unique:customers,email,' . $customer->id,
            'age'        => 'required',
        ]);

        $customer->first_name = $request->first_name;
        $customer->last_name  = $request->last_name;
        $customer->email      = $request->email;
        $customer->age        = $request->age;
        $customer->save();
        sleep(1);

        return redirect()->route('customers.index')
            ->with('message', 'Customer Updated Successfully');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $customer)
    {
        $customer->delete();
        sleep(1);

        return redirect()->route('customers.index')
            ->with('message', 'Customer Delete Successfully');
    }
}
