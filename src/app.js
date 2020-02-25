import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      exchangeRates: []
    },
    mounted(){
      this.fetchExchangeRates();
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
