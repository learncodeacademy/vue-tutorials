<template>
  <div>
    <h1>Friends</h1>
    {{id}}
    {{age}}
    {{weight}}
  </div>
</template>

<script>
export default {  
  props: [
    'id',
    'age',
    'weight',
  ]

}
</script>

