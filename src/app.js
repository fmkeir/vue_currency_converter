import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      exchangeRates: [],
      currencyToSwitchTo: null,
      euroBox: null,
      otherBox: null
    },
    mounted(){
      this.fetchExchangeRates();
    },
    computed: {
      // otherBox: function(){
      //   return this.euroValue * this.exchangeRates[this.currencyToSwitchTo]
      // }
    },
    methods: {
      fetchExchangeRates: function(){
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.setExchangeRates(data.rates))
      },
      setExchangeRates: function(rates){
        this.exchangeRates = rates
      },
      convertToOther: function(event){
        if (this.currencyToSwitchTo){
          this.euroBox = event.target.value
          this.otherBox = (this.euroBox * this.exchangeRates[this.currencyToSwitchTo]).toFixed(2)
        }
      },
      convertToEuro: function(event){
        if (this.currencyToSwitchTo){
          this.otherBox = event.target.value
          this.euroBox = (this.otherBox / this.exchangeRates[this.currencyToSwitchTo]).toFixed(2)
        }
      },
      currencySwitch: function(){
        if (this.currencyToSwitchTo){
          this.otherBox = (this.euroBox * this.exchangeRates[this.currencyToSwitchTo]).toFixed(2)
        }
      }
    }
  })
})
