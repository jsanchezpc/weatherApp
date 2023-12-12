<template>
  <div class="weather-info">
    <div class="weather-detail">
      <div class="detail-msg">
        <p>{{ weather.name }}</p>
      </div>
      <div class="details temp">
        <sub>Temperatura</sub>
        <p class="big">{{ weather.main.temp }}º</p>
        <sub
          ><span style="color: red">{{ weather.main.temp_max }}</span
          >/<span style="color: blue">{{ weather.main.temp_min }}</span></sub
        >
      </div>
      <div class="details wea">
        <img :src="iconLink" alt="weather icon" />
        <p class="big">{{ weather.weather[0].description }}</p>
      </div>
      <div class="details hum">
        <sub>Humedad</sub>
        <p class="big">{{ weather.main.humidity }}</p>
      </div>
      <div class="details wind">
        <sub>Viento (m/s)</sub>
        <p class="big">{{ weather.wind.speed }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherInfo',
  props: {
    weather: Object
  },
  data() {
    return {
      iconLink: `https://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables';
div.weather-info {
  width: 94%;
  margin: 0 auto;
  border-radius: 8px;
  background-color: white;
  padding: 8px;
  div.weather-detail {
    display: grid;
    grid-template-areas:
      'msg msg'
      'temp wea'
      'hum wind';
    border-radius: 4px;
    color: $dark;
    .detail-msg {
      background-color: antiquewhite;
      grid-area: msg;
      p {
        padding: 0;
        margin: 0;
        text-align: center;
        font-size: 1.3rem;
      }
    }
    .details {
      flex: 1;
      text-align: center;
      p.big {
        font-size: 2.8em;
        padding: 0;
        margin: 0 auto;
        text-align: center;
      }
    }
    .temp {
      grid-area: temp;
      .subdetail {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }

    .hum {
      grid-area: hum;
    }

    .wea {
      img {
        margin: 0 auto;
        display: block;
        width: 64px;
        border-radius: 100%;
      }
    }
  }
}
</style>
