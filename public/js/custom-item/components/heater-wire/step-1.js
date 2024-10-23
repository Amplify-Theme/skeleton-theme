export default  {
    name : 'step-1',
    template : `
      <div>
      <div :class="orderStep === 1 ? 'order-step-block' : 'order-step-d-none'" class="row mb-4 mb-sm-5">
        <div class="col-md-12">
          <div class="title mb-3 d-flex align-items-center gap-2">
            <i :class="wireStepOneFoot ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
            <h5 class="mb-0 text-danger text-uppercase fw-600">Step 01</h5>
          </div>
          <div class="border rounded-md p-3">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <div class="fw-500">TYPE OF HEATER WIRE: <span class="text-danger">*</span></div>
              <select v-model="$parent.wireStepOneWire" class="form-control w-110">
                <option value="">Choose</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <div class="fw-500">PRICE PER FOOT:</div>
              <input v-model="$parent.wireStepOneFoot" type="text" placeholder="0"
                     class="form-control w-110">
            </div>
          </div>
        </div>
      </div>

      <!-- STEP 02 -->
      <div :class="orderStep === 1 ? 'order-step-block' : 'order-step-d-none'" class="row mb-4 mb-sm-5">
        <div class="col-md-12">
          <div class="title mb-3 d-flex align-items-center gap-2">
            <i :class="wireStepTwo ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
            <h5 class="mb-0 text-danger text-uppercase fw-600">Step 02</h5>
          </div>
          <div class="border rounded-md p-3">
            <div class="d-flex align-items-center justify-content-between">
              <div class="fw-500">VOLTAGE: <span class="text-danger">*</span></div>
              <select  v-model="$parent.wireStepTwo" class="form-control w-110">
                <option value="">Choose</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- STEP 03 -->
      <div :class="orderStep === 1 ? 'order-step-block' : 'order-step-d-none'" class="row mb-4 mb-sm-5">
        <div class="col-md-12">
          <div class="title mb-3 d-flex align-items-center gap-2">
            <i :class="wireStepThree ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
            <h5 class="mb-0 text-danger text-uppercase fw-600">Step 03</h5>
          </div>
          <div class="border rounded-md p-3">
            <div class="d-flex align-items-center justify-content-between">
              <div class="fw-500">HOLDING TEMP OF BOX (F):<span class="text-danger">*</span></div>
              <select  v-model="$parent.wireStepThree" class="form-control w-110">
                <option value="">Choose</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      </div>
        
    `,

    props:['orderStep','wireStepOneFoot','wireStepOneWire','wireStepTwo','wireStepThree'],
}