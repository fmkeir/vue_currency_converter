import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      exchangeRates: [],
      currencyToSwitchTo: null,
      euroValue: null,
      otherValue: null
    },
    mounted(){
      this.fetchExchangeRates();
    },
    computed: {
      otherFromEuro: function(){
        return this.euroValue * this.exchangeRates[this.currencyToSwitchTo]
      }
    },
    methods: {
      fetchExchangeRates: function(){
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.setExchangeRates(data.rates))
      },
      setExchangeRates: function(rates){
        this.exchangeRates = rates
      }
    }
  })
})
