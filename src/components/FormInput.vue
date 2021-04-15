<template>
    <form @submit.prevent="submitData">
        <div>
        <label>Kode Mapel :</label><br>
        <input type="text" v-model="enteredKd" required><br><br>
        </div>

        <div>
            <label>Nama Mapel :</label><br>
            <input type="text" v-model="enteredNm"><br><br>
        </div>

        
        <div>
            <label>Status</label><br>
            <select v-model="enteredSt">
                <option>Aktif</option>
                <option>Tidak Aktif</option>
            </select><br><br>
        </div>
        <div>
            <button>addData</button>
        </div>
    </form>
</template>

<script>
export default {
    emits:['add-data'],
    data(){
        return{
            enteredKd:'',
            enteredNm:'',
            enteredSt:''
        }
    },
    methods:{
        submitData(){
            this.$emit('add-data', 
            this.enteredKd,
            this.enteredNm,
            this.enteredSt)

            this.enteredKd='',
            this.enteredNm='',
            
            this.enteredSt=''
        }
    }
}
</script>