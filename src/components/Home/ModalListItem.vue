<template>
  <div class="px-3 detail-modal-list-item">
    <div class="detail-modal-list-item-label">
      {{ label }}
    </div>
    <div class="detail-modal-list-item-icon">
      <fa :icon="icon" />
    </div>
    <div class="detail-modal-list-item-value">
      <span>{{ value }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["label", "icon", "value"]
};
</script>
<style lang="scss" scoped>
.detail-modal-list-item {
  width: 100%;
  height: 100px;
  margin: auto;
  font-size: 3rem;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(65, 65, 65, 0.3) 1px 3px 6px;
  transition-duration: 0.3s;
  .detail-modal-list-item-label {
    font-size: 1rem;
    font-weight: bold;
    line-height: 100px;
    opacity: 0;
    transform: scale(0);
    transition-duration: 0.3s;
  }
  .detail-modal-list-item-icon {
    position: absolute;
    line-height: 100px;
    opacity: 1;
    transition-duration: 0.3s;
  }
  .detail-modal-list-item-value {
    line-height: 100px;
  }
  &:hover {
    .detail-modal-list-item-icon {
      opacity: 0;
      transform: scale(0) rotate(360deg);
      animation: displayNone 0.3s;
    }
    .detail-modal-list-item-label {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>
