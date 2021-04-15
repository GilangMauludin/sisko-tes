import { createApp } from 'vue'
import App from './App.vue'
import FormInput from './components/FormInput.vue';
import FormOutput from './components/FormOutput.vue';

const app = createApp(App)
app.component('form-input', FormInput);
app.component('form-output', FormOutput);

app.mount('#app')
