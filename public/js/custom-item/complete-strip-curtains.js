import CustomModal from './components/custom-modal.js';
export default {
    name    : 'CompleteStripCurtains',
    template: `
      <div class="container padding-bottom-3x mb-1 custom-product custom-product-complete-strip-curtains">
        <div class="row">
          <div class="col-12">
            <h3 class="fw-600 text-dark text-capitalize">Create Your Custom Strip Curtain Order</h3>
            <p class="mb-4"><span class="text-danger">NOTE:</span> Strip curtains will be larger than door opening size.
            </p>

            <!--STEP 01-->
            <div :class="orderStep === 1 ? 'order-step-block' : 'order-step-d-none'" class="row mb-4 mb-sm-5">
              <div class="col-md-6">
                <div class="title mb-3 d-flex align-items-center gap-2">
                  <i :class="curtainOrderStepOne ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
                  <h5 class="mb-0 text-danger text-uppercase fw-600">Step 01</h5>
                </div>
                <div class="border rounded-md text-uppercase p-3">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="fw-500">Specify Usage of Curtain Area <span class="text-danger">*</span></div>
                    <select v-model="curtainOrderStepOne" class="form-control w-110">
                      <option value="">Choose</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <!--STEP 02-->
            <div :class="orderStep === 1 ? 'order-step-block' : 'order-step-d-none'" class="row mb-md-5 mb-4">
              <div class="col-md-6">
                <div class="title mb-3 d-flex align-items-center gap-2">
                  <i :class="curtainOrderStepTwo ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
                  <h5 class="mb-0 text-danger text-uppercase fw-600">Step 02</h5>
                </div>
                <div class="border rounded-md text-uppercase p-3 mb-md-5 mb-4">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="fw-500">Select Strip Width <span class="text-danger">*</span></div>
                    <select :disabled="!curtainOrderStepOne" v-model="curtainOrderStepTwo" class="form-control w-110">
                      <option value="">Choose</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>
                  </div>
                </div>

                <div class="product-image position-relative">
                  <img class="w-100 h-100" src="../images/custom-product/strip-curtains/door-opening-size.png" alt="">

                  <div v-for="(value,index) in modalStep" :key="index" @click="handleStepOne(index)"
                       :class="[index, {'bg-danger' : value == '0' }, {'bg-success' : value != '0'}]"
                       class="position-absolute input-box ">{{ value }}
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div class="fw-600 h3 mt-3 mb-4">REMEMBER: Strip curtains will be larger than door opening size</div>
              </div>

              <div class="col-md-6">
                <div class="border rounded-md text-uppercase p-3">
                  <div class="d-flex align-items-center justify-content-between mb-4">
                    <div class="fw-500">Price Per Square Inch <span class="text-danger">*</span></div>
                    <input :disabled="!curtainOrderStepTwo" v-model="curtainOrderStepTwoInch" type="text"
                           placeholder="0"
                           class="form-control w-90">
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="fw-500">TOTAL CURTAIN PRICE: <span class="text-danger">*</span></div>
                    <input :disabled="!curtainOrderStepTwoInch" v-model="curtainOrderStepTwoPrice" type="text"
                           placeholder="0"
                           class="form-control w-90">
                  </div>
                </div>
              </div>
            </div>

            <!--STEP 03-->
            <div :class="orderStep === 1 ? 'order-step-block' : 'order-step-d-none'" class="row mb-4 mb-sm-5">
              <div class="col-md-6">

                <div class="title mb-3 d-flex align-items-center gap-2">
                  <i :class="curtainOrderStepThree ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
                  <h5 class="mb-0 text-danger text-uppercase fw-600">Step 03</h5>
                </div>

                <p><span class="text-danger">NOTE:</span> If you want the mounting bar cut, to save on shipping, select
                  YES.If you do NOT want the
                  mounting bar cut, select NO.
                  EXAMPLE: A 100" bar could be cut into two 50" sections.Each 50" section is mounted side-by-side to
                  create the full 100" length.</p>

                <div class="border rounded-md text-uppercase p-3 mb-3">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="fw-500 text-uppercase">FOAM FILL HINGE SIDE:</div>
                    <div class="d-flex gap-3">
                      <div class="form-check">
                        <input :disabled="!curtainOrderStepTwoPrice" v-model="curtainOrderStepThree" value="Yes"
                               class="form-check-input custom-radio-color" type="radio" id="door-yes">
                        <label class="form-check-label" for="door-yes">Y</label>
                      </div>
                      <div class="form-check">
                        <input :disabled="!curtainOrderStepTwoPrice" v-model="curtainOrderStepThree" value="No"
                               class="form-check-input custom-radio-color" type="radio" id="door-no">
                        <label class="form-check-label" for="door-no">N</label>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="mb-0"><span class="text-danger">NOTE:</span>
                  Any strip curtain mounting bar over 104" in length will be subject to Motor Freight charges. Motor
                  Freight charges can range from an extra $150 to $250.
                </p>
              </div>
            </div>

            <!--STEP 04-->
            <div :class="orderStep === 1 ? 'order-step-block' : 'order-step-d-none'" class="row">
              <div class="col-md-6 mb-4">
                <div class="title mb-3 d-flex align-items-center gap-2">
                  <i :class="curtainOrderStepFourQuantity ? 'text-success' : 'text-black-50'"
                     class="icon-circle-check"></i>
                  <h5 class="mb-0 text-danger text-uppercase fw-600">Step 04</h5>
                </div>
                <div class="border rounded-md p-3">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="fw-500 text-uppercase">QUANTITY: <span class="text-danger">*</span></div>
                    <select :disabled="!curtainOrderStepThree" v-model="curtainOrderStepFourQuantity"
                            class="form-control w-110">
                      <option>0</option>
                      <option value="1">1</option>
                      <option value="1">2</option>
                    </select>
                  </div>
                  <div class="d-flex align-items-center justify-content-between my-4">
                    <div class="fw-500 text-uppercase">TOTAL SQUARE INCHES</div>
                    <input :disabled="!curtainOrderStepThree" v-model="curtainOrderStepFourInches" type="text"
                           placeholder="00" class="form-control w-110">
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="fw-500 text-uppercase">TOTAL PRICES:</div>
                    <input :disabled="!curtainOrderStepThree" v-model="curtainOrderStepFourPrice" type="text"
                           placeholder="00"
                           class="form-control w-110">
                  </div>
                </div>
              </div>

              <!--SUBMIT BUTTON-->
              <div class="col-12">
                <button type="submit" class="btn btn-primary"
                        :disabled="!curtainOrderStepFourPrice">Submit
                </button>
              </div>
            </div>

          </div>
        </div>

        <CustomModal :stepOne="modalStep" :step="step" :closeModel="closeModel" :confirmModel="confirmModel"
                     v-if="showModal"/>

      </div>

    `,
    components:  {
        CustomModal
    },
    data() {
        return {
            showModal       : false,
            step            : '',
            orderStep            : 1,
            currentStepValue: '',
            modalStep         : {
                'input-one'  : '0',
                'input-two'  : '0',
            },
            curtainOrderStepOne: '',
            curtainOrderStepTwo: '',
            curtainOrderStepTwoInch:'',
            curtainOrderStepTwoPrice:'',
            curtainOrderStepThree: '',
            curtainOrderStepFour: '',
            curtainOrderStepFourQuantity: '',
            curtainOrderStepFourInches: '',
            curtainOrderStepFourPrice: '',
        }
    },
    computed:{
        stepOneValue(){
            let check = true;
            Object.entries(this.modalStep).forEach(item => {
                if(item[1] !== '0'){
                    check = false
                }
            })
            return check
        }
    },

    methods:{
        closeModel() {
            this.modalStep[this.step] = this.currentStepValue;
            this.showModal          = false;
            this.step               = ''
            this.currentStepValue   = ''
            document.querySelector('body').classList.remove('modalShow')
        },
        confirmModel(){
            this.modalStep[this.step] === '' ? this.modalStep[this.step] = 0 : this.modalStep[this.step]
            this.showModal          = false;
            this.step               = ''
            this.currentStepValue   = ''
            document.querySelector('body').classList.remove('modalShow')
        }
    }
};