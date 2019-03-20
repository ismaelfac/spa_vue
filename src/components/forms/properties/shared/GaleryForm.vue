<template>
	<div class="flex md12">
      <vuestic-widget :headerText="$t('fileUpload.advancedUploadList')">
        <vuestic-file-upload
          dropzone
          v-model="advancedList"
        />
      </vuestic-widget>
    </div>
</template>
<script>
export default {
  name: 'file-upload',
  data () {
    return {
      advancedList: []
    }
  },
}
</script>