<template>
    <tr>
        <td>{{ kd }}</td>
        <td>{{ nm }}</td>
        <td>{{ st }}</td>
        <td><button @click="$emit('delete',id)">delete</button></td>
    </tr>
</template>

<script>
export default {
    emits:['delete'],
    props:{
        id:{
            type: String,
            required: true
        },
        kd:{
            type: String,
            required: true
        },
        nm:{
            type: String,
            required: true
        },
        st:{
            type: String,
            required: true
        }
    }
};
</script>