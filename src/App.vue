<template>
  <form-input @add-data="addData"></form-input><br><br>

  <table>
    <thead>
    <tr>
      <th>KD_MAPEL</th>
      <th>NM_MAPEL</th>
     
      <th>STATUS</th>
      <th>AKSI</th>
    </tr>
    </thead>

    <tbody>
  <form-output
  v-for="mapel in mapels"
  :key="mapel.id"
  :id="mapel.id"
  :kd="mapel.kd"
  :nm="mapel.nm"
  :st="mapel.st"
  @delete="deleteData"
  ></form-output>
    </tbody>
  </table>
</template>

<script>



export default {
 
  
  data(){
    return{
      mapels:[
        {
          id: '1',
          kd: 'MP001',
          nm: 'Matematika',
          st: 'aktif'
        }
      ]

      
    }
  },
  methods:{
    addData(kd, nm, st){
      const mapel={
        id: new Date().toISOString(),
        kd: kd,
        nm: nm,
        st: st
      }
      this.mapels.push(mapel)
    },
    deleteData(mapelId){
      this.mapels = this.mapels.filter((mapel)=> mapel.id !== mapelId)
    }
  }
};
</script>

 