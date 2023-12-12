<template>
  <div class="home">
    <h1>ER TIEMPO</h1>
    <hr />
    <div class="search-box">
      <input
        v-model="where"
        class="search"
        type="search"
        placeholder="Ciudad, pueblo..."
        autofocus
      />
      <input @click="loadWeather" class="search-btn" type="button" value="Buscar" />
    </div>
    <br />
    <WeatherInfo v-if="weatherInfo.length > 0" :weather="weatherInfo" />
  </div>
</template>

<script>
import axios from 'axios'
import WeatherInfo from '@/components/WeatherInfo.vue'
export default {
  name: 'HomeView',
  components: {
    WeatherInfo
  },
  data() {
    return {
      weatherInfo: localStorage.weatherInfo ? JSON.parse(localStorage.weatherInfo) : [],
      where: ''
    }
  },
  methods: {
    loadWeather() {
      if (this.where.length > 1) {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.where}&lang=sp&appid=${
              import.meta.env.VITE_WEATHER_KEY
            }&units=metric`
          )
          .then((data) => {
            console.log(data.data)
            localStorage.setItem('weatherInfo', JSON.stringify(data.data))
          })
      }
    }
  },
  watch: {
    weatherInfo(newWeather, oldWeather) {
      if (newWeather != oldWeather) {
        this.weatherInfo = newWeather
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables';
div.home {
  h1 {
    margin: 0;
    text-align: center;
  }
  .search-box {
    width: 100%;
    margin: 0 auto;
    input.search {
      border: none;
      text-align: center;
      width: 100%;
      height: 50px;
      outline: none;
      font-size: 1.4em;
    }
    input.search-btn {
      width: 100%;
      height: 50px;
      background-color: $main;
      color: $dark;
      outline: none;
      border: none;
      font-size: 1.4em;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
