export default  {
    name : 'CustomModal',
    template : `      
      <div>
        <div class="cs-modal" id="cs-modal">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0 bg-white shadow-lg">
              <div class="modal-header border-0">
                <h5 class="modal-title text-uppercase">Modal title</h5>
              </div>
              <div class="modal-body">
                <div class="border rounded-md px-3 d-flex align-items-center justify-content-between">
                  <input v-model="stepOne[step]" class="border-0 form-control p-0" type="text" placeholder="0">
                  <div>Inches</div>
                </div>
                <div class="py-2"></div>
                <div class="border rounded-md d-flex align-items-center justify-content-between pr-3">
                  <select v-model="stepOne[step]" class="border-0 form-control">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <div>Inches</div>
                </div>
              </div>
              <div class="modal-footer border-0">
                <button @click="closeModel" type="button" class="btn btn-outline-danger" data-dismiss="modal">
                  cancel
                </button>
                <button @click="confirmModel" type="button" class="btn btn-success">Confirm</button>
              </div>
            </div>
          </div>
        </div>
        <div class="position-fixed w-100 h-100 left-0 top-0 cs-modal-backdrop"></div>
      </div>
      
    `,

    props:['stepOne','step','closeModel','confirmModel']
}