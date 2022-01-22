<template>
    <div>
        <div :class="isSubmitted ? 'hidden' : ''" class="container mx-auto">
            <div class="flex pizza-list justify-center">
                <button
                    :class="pizzaIndex === 1 ? 'bg-red-500' : 'bg-blue-500'"
                    class="inline-block px-4 py-2 mr-3"
                    @click="currentPizza(1)"
                >
                    <img v-bind:src="'src/assets/pizza.jpg'" style="width:12    0px;height:70px;" />
                    <h1>Small Pizza</h1>
                    <h2>$5</h2>
                </button>
                <button
                    :class="pizzaIndex === 2 ? 'bg-red-500' : 'bg-blue-500'"
                    class="inline-block px-4 py-2 mr-3"
                    @click="currentPizza(2)"
                >
                    <img v-bind:src="'src/assets/pizza.jpg'" style="width:12    0px;height:70px;" />
                    <h1>Middle Pizza</h1>
                    <h2>$10</h2>
                </button>
                <button
                    :class="pizzaIndex === 3 ? 'bg-red-500' : 'bg-blue-500'"
                    class="inline-block px-4 py-2 mr-3"
                    @click="currentPizza(3)"
                >
                    <img v-bind:src="'src/assets/pizza.jpg'" style="width:12    0px;height:70px;" />
                    <h1>Large Pizza</h1>
                    <h2>$15</h2>
                </button>
            </div>
            <div class="flex topping-list justify-center mt-3">
                <button
                    v-for="topping in toppingsOnSale"
                    :class="isExist(topping.name) ? 'bg-red-500' : 'bg-yellow-500'"
                    :key="topping.name"
                    @click="toggleTopping(topping.name)"
                    class="inline-block px-4 py-2 mr-3"
                >
                    <img
                        v-bind:src="'src/assets/' + topping.name + '.jpg'"
                        style="width:100px;height:70px;"
                    />
                    <h3>{{ topping.name }}</h3>
                    <h2>{{ topping.value==0?'free': '%'+topping.value}}</h2>
                </button>
            </div>
            <div class="flex justify-center" style="margin-top:50px;">
                <form
                    class="mb-2 block ml-20 mr-20"
                    style="width:500px;"
                    @submit.prevent="confirmPizza"
                >
                    <div class="mb-3">
                        <label for="name" class="text-xl font-bold text-gray-600">name</label>
                        <br />
                        <input
                            id="name"
                            v-model="customer.name"
                            type="text"
                            class="p-2 mt-2 rounded-lg w-full border-0 shadow-md focus:ring-2 focus:ring-blue-500 text-lg"
                            placeholder="name"
                            required
                        />
                    </div>

                    <div class="mb-3">
                        <label for="address" class="text-xl font-bold text-gray-600">address</label>
                        <br />
                        <input
                            id="address"
                            v-model="customer.address"
                            type="text"
                            class="p-2 mt-2 rounded-lg w-full border-0 shadow-md focus:ring-2 focus:ring-blue-500 text-lg"
                            placeholder="Address"
                            required
                        />
                    </div>

                    <div class="mb-3">
                        <label for="phone" class="text-xl font-bold text-gray-600">Phone</label>
                        <br />
                        <input
                            id="phone"
                            v-model="customer.phone"
                            type="text"
                            class="p-2 mt-2 rounded-lg w-full border-0 shadow-md focus:ring-2 focus:ring-blue-500 text-lg"
                            placeholder="Phone"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        class="p-2 w-full rounded-lg text-white text-lg font-bold bg-gradient-to-r from-indigo-400 to-blue-500 hover:from-indigo-500 hover:to-blue-600 hover:bg-blue-600"
                    >Submit</button>
                </form>
            </div>
        </div>
        <div :class="!isSubmitted ? 'hidden' : ''" class="container mx-auto flex justify-center">
            <div class="summary">
                <label class="text-xl font-bold text-gray-600 summary-title">Summary</label>
                <div><label class="text-xl font-bold text-gray-600 summary-item-title">Name</label></div>
                <div><label class="text-xl font-bold text-gray-600 summary-item-text">{{ customer.name }}</label></div>
                <div><label class="text-xl font-bold text-gray-600 summary-item-title">Address</label></div>
                <div><label class="text-xl font-bold text-gray-600 summary-item-text">{{ customer.address }}</label></div>
                <div><label class="text-xl font-bold text-gray-600 summary-item-title">Phone</label></div>
                <div><label class="text-xl font-bold text-gray-600 summary-item-text">{{ customer.phone }}</label></div>
                <div><label class="text-xl font-bold text-gray-600 summary-item-title">Pizza Size</label></div>
                <div><label class="text-xl font-bold text-gray-600 summary-item-text">{{ pizzaSizeByIndex(pizzaIndex) }}</label></div>
                <div><label class="text-xl font-bold text-gray-600 summary-item-title">Toppings</label></div>
                <div><label class="text-xl font-bold text-gray-600 summary-item-text">{{ selectedToppings }}</label></div>
                <div><label class="text-xl font-bold text-gray-600 summary-item-title">Total Pizza Price</label></div>
                <div><label class="text-xl font-bold text-gray-600 large-text ">${{ calcTotalPrice() }}</label></div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Home',
    data() {
        return {
            toppings: [
                {
                    name: 'mushrooms',
                    value: 1
                },
                {
                    name: 'olives',
                    value: 1
                },
                {
                    name: 'tomato',
                    value: 0
                },
                {
                    name: 'pepperoni',
                    value: 2
                },
                {
                    name: 'seafood',
                    value: 5
                },
                {
                    name: 'bacon',
                    value: 1
                },
                {
                    name: 'onion',
                    value: 0
                },
                {
                    name: 'mozzarella',
                    value: 3
                },
            ],
            pizzaIndex: 0,
            selectedToppings: [],
            customer: {
                name: '',
                address: '',
                phone: ''
            },
            isSubmitted: false,

        };
    },
    computed: {
        toppingsOnSale: function () {
            return this.toppings;
        }
    },
    methods: {

        pizzaSizeByIndex(idx) {
            if (idx === 1) {
                return 'small';
            } else if (idx === 2) {
                return 'middle';
            } else if (idx == 3) {
                return 'large';
            }

            return 'undefiend';
        },
        currentPizza: function (pIndex) {
            this.pizzaIndex = pIndex;
        },

        toggleTopping: function (name) {
            const idx = this.selectedToppings.findIndex(d => d == name);
            if (idx != -1) {
                this.selectedToppings.splice(idx, 1);
            } else {
                if (this.selectedToppings.length === 6) {
                    alert('cannot add further max:6');
                    return;
                }
                if (name === 'bacon' && this.isExist('seafood') || name === 'seafood' && this.isExist('bacon')) {
                    alert('cannot add with bacon and seafood in the same pizza');
                    return;
                }

                const toppingData = this.getToppingByName(name);
                if (toppingData.value === 0 && !this.canAddFree()) {
                    alert("cannot add free topping");
                    return;
                }

                this.selectedToppings.push(name);
            }
        },

        getToppingByName: function (name) {
            const data = this.toppings.filter(d => d.name == name);
            return data[0];
        },
        canAddFree: function () {
            let freeCount = 0;
            let noFreeCount = 0;
            this.selectedToppings.forEach(n => {
                if (this.getToppingByName(n).value > 0)
                    noFreeCount = noFreeCount + 1;
                else
                    freeCount = freeCount + 1;
            })

            if (noFreeCount >= (freeCount + 1) * 2)
                return true;
            else
                return false;
        },
        isExist: function (name) {
            const idx = this.selectedToppings.findIndex(d => d == name);
            if (idx != -1)
                return true;
            else
                return false;
        },
        confirmPizza: function () {

            if (this.pizzaIndex === 0) {
                alert("Please select Pizza Size");
                return;
            }

            if (this.selectedToppings.length === 0) {
                alert("Please select Toppings");
                return;
            }

            this.isSubmitted = true;
        },

        calcTotalPrice: function () {
            let totalPrice = 0;
            totalPrice = totalPrice + this.pizzaIndex * 5;
            this.selectedToppings.forEach(d => {
                const data = this.getToppingByName(d);
                totalPrice = totalPrice + data.value;
            });
            return totalPrice;
        }
    },
};
</script>
