export default  {
    name : 'step-6',
    template : `
      <div :class="orderStep === 4 ? 'order-step-block' : 'order-step-d-none'"
           v-if="currentWidth < 576 || !stepOneValue" class="row mb-4 mb-sm-5">
      <div :class="stepSixProductGasketProfile == 'Yes' ? 'col-md-8' : 'col-md-4'">
        <div class="title mb-3 d-flex align-items-center gap-2">
          <i :class="stepSixProductGasketProfile ? 'text-success' : 'text-black-50'"
             class="icon-circle-check"></i>
          <h5 class="mb-0 text-danger text-uppercase fw-600">Step 06</h5>
        </div>
        <h6 class="mb-4">Option for Walk-In Door Gaskets</h6>

        <div class="border rounded-md p-3">
          <div class="d-flex flex-column flex-md-row gap-3 justify-content-between">
            <div class="order-1 order-md-0 w-100 d-flex flex-column">
              <!--CHOOSE FILL HINGE SIDE-->
              <div class="d-flex align-items-center justify-content-between">
                <div class="fw-500 text-uppercase">FOAM FILL HINGE SIDE:</div>
                <div class="d-flex gap-3">
                  <div class="form-check">
                    <input v-model="$parent.stepSixProductGasketProfile" value="Yes"
                           class="form-check-input custom-radio-color" type="radio" id="door-yes">
                    <label class="form-check-label" for="door-yes">Y</label>
                  </div>
                  <div class="form-check">
                    <input v-model="$parent.stepSixProductGasketProfile" value="No"
                           class="form-check-input custom-radio-color" type="radio" id="door-no">
                    <label class="form-check-label" for="door-no">N</label>
                  </div>
                  <div class="text-danger border border-danger rounded-circle" type="button" data-toggle="tooltip"
                       data-placement="top"
                       title="A foam filled gasket on the hinge side will help prevent binding of the gasket on some door models">
                    &#10071;
                  </div>
                </div>
              </div>
              <!--CHOOSE DOOR HANGED -->
              <div v-if="stepSixProductGasketProfile == 'Yes'">
                <div class="d-flex align-items-center justify-content-between my-4">
                  <div class="fw-500 text-uppercase">DOOR HINGED LEFT OR RIGHT:</div>
                  <div class="d-flex gap-3">
                    <div class="form-check">
                      <input v-model="$parent.stepSixProductGasketDoor" value="left"
                             class="form-check-input custom-radio-color" type="radio" name="door" id="door-l">
                      <label class="form-check-label" for="door-l">L</label>
                    </div>
                    <div class="form-check">
                      <input v-model="$parent.stepSixProductGasketDoor" value="right"
                             class="form-check-input custom-radio-color" type="radio" name="door" id="door-r">
                      <label class="form-check-label" for="door-r">R</label>
                    </div>
                    <div class="px-2 mx-1"></div>
                  </div>
                </div>

                <div class="mt-auto">HINGE SIDE IS DETERMINED WITH THE DOOR CLOSED.(VIEW THE CLOSED DOOR FROM
                  OUTSIDE THE BOX/UNIT
                </div>
              </div>

            </div>
            <!-- DOOR IMAGE -->
            <div v-if="stepSixProductGasketProfile == 'Yes'"
                 :class="['position-relative',(stepSixProductGasketDoor == 'right' && 'door left'), (stepSixProductGasketDoor == 'left' && 'door right')]">
              <img src="../images/custom-product/gaskets/step-6/step-1.png" alt="">
            </div>
          </div>
        </div>
      </div>
      </div>
      
    `,

    props:['orderStep', 'currentWidth', 'stepOneValue', 'stepSixProductGasketProfile', 'stepSixProductGasketDoor']
}