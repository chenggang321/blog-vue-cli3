<template>
    <!-- Modal -->
    <div
        :id="id"
        class="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
    >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 id="myModalLabel" class="modal-title">{{ title }}</h4>
                </div>
                <div class="modal-body">
                    <slot name="modal-body" />
                </div>
                <div class="modal-footer">
                    <slot name="modal-footer" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogModal",
    props: {
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.modal-header {
    border: none;
}

.modal-title {
    text-align: center;
}

.modal-footer {
    border: none;
}

.modal {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>
