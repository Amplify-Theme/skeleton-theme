import CustomModal from './components/custom-modal.js';
import GasketStepOne from './components/gaskets/step-1.js';
import GasketStepTwo from './components/gaskets/step-2.js';
import GasketStepThree from './components/gaskets/step-3.js';
import GasketStepFour from './components/gaskets/step-4.js';
import GasketStepFive from './components/gaskets/step-5.js';
import GasketStepSix from './components/gaskets/step-6.js';
import GasketStepSeven from './components/gaskets/step-7.js';

export default {
    name      : 'Gaskets',
    template  : `
      <div class="container padding-bottom-3x mb-1 custom-product custom-product-gaskets">
      <div class="row">
        <div class="col-12">
          <!--STEP 01-->
          <GasketStepOne
              :gasketStatus="gasketStatus"
              :nextStep="nextStep"
              :orderStep="orderStep"
              :stepOneProductGaskets="stepOneProductGaskets"
          />

          <!--STEP 02-->
          <GasketStepTwo
              :retainerStatus="retainerStatus"
              :orderStep="orderStep"
              :stepTwoProductRetainer="stepTwoProductRetainer"
              :nextStep="nextStep"
          />

          <!--STEP 03-->
          <GasketStepThree
              :retainerStatus="retainerStatus"
              :gasketProfileStatus="gasketProfileStatus"
              :orderStep="orderStep"
              :stepThreeProductGasketProfileFinal="stepThreeProductGasketProfileFinal"
              :stepThreeProductGasketProfile="stepThreeProductGasketProfile"
              :stepThreeProductGasket="stepThreeProductGasket"
          />

          <!--STEP 04-->
          <GasketStepFour
              :orderStep="orderStep"
              :gasketProfileStatus="gasketProfileStatus"
              :stepFourProductGasketProfile="stepFourProductGasketProfile"
              :nextStep="nextStep"
          />

          <!--STEP 05-->
          <GasketStepFive
              :orderStep="orderStep"
              :stepFourProductGasketProfile="stepFourProductGasketProfile"
              :stepOneValue="stepOneValue"
              :stepFiveProductGasketModal="stepFiveProductGasketModal"
              :handleStepOne="handleStepOne"
          />

          <!--STEP 06-->
          <GasketStepSix
              :orderStep="orderStep"
              :currentWidth="currentWidth"
              :stepOneValue="stepOneValue"
              :stepSixProductGasketProfile="stepSixProductGasketProfile"
              :stepSixProductGasketDoor="stepSixProductGasketDoor"
          />

          <!--STEP 07-->
          <GasketStepSeven
              :orderStep="orderStep"
              :currentWidth="currentWidth"
              :stepSixProductGasketProfile="stepSixProductGasketProfile"
              :stepSevenProductGasketTotalPrice="stepSevenProductGasketTotalPrice"
          />


          <!-- NEXT-PREV BUTTON -->
          <div class="d-sm-none d-flex align-items-center justify-content-between mt-5">
            <button :disabled="orderStep===1" @click="handleNextPrev(orderStep,'prev')"
                    :class="orderStep > 1 ? 'btn-primary' : 'btn-secondary' " class="w-90 m-0 btn btn-sm">Prev
            </button>
            <div class="d-flex gap-3">
              <span :class="orderStep === 1 ? 'bg-danger' : 'bg-secondary' " class="bullet"></span>
              <span :class="orderStep === 2 ? 'bg-danger' : 'bg-secondary' " class="bullet"></span>
              <span :class="orderStep === 3 ? 'bg-danger' : 'bg-secondary' " class="bullet"></span>
              <span :class="orderStep === 4 ? 'bg-danger' : 'bg-secondary' " class="bullet"></span>
            </div>
            <button v-if="orderStep === 4" type="submit" class="m-0 btn btn-primary btn-sm w-90"
                    :disabled="! stepSevenProductGasketTotalPrice">
              Submit
            </button>
            <button v-else @click="handleNextPrev(orderStep,'next')" class="m-0 btn btn-primary btn-sm w-90"
                    :disabled="nextStep === false">Next
            </button>
          </div>


        </div>
      </div>

      <CustomModal :stepOne="stepFiveProductGasketModal" :step="step" :closeModel="closeModel"
                   :confirmModel="confirmModel"
                   v-if="showModal"/>

      </div>

    `,
    components: {
        CustomModal,
        GasketStepOne,
        GasketStepTwo,
        GasketStepThree,
        GasketStepFour,
        GasketStepFive,
        GasketStepSix,
        GasketStepSeven
    },
    data() {
        return {
            currentWidth    : 0,
            showModal       : false,
            step            : '',
            orderStep       : 1,
            currentStepValue: '',

            stepOneProductGaskets: [
                {
                    img  : 'step-1/dart.png',
                    title: 'Dart-Mounted',
                    type : 'Magnetic'
                },
                {
                    img  : 'step-1/screw.png',
                    title: 'Screw-Mounted',
                    type : 'Magnetic'
                },
                {
                    img  : 'step-1/retainer.png',
                    title: 'Retainer-Mounted',
                    type : 'Magnetic'
                },
                {
                    img  : 'step-1/compression.png',
                    title: 'compression',
                    type : '(Non-Magnetic)'
                }
            ],
            gasketStatus         : '',

            stepTwoProductRetainer: [
                {
                    img  : 'step-2/1.png',
                    title: '02-070',
                },
                {
                    img  : 'step-2/2.png',
                    title: '02-090',
                },
                {
                    img  : 'step-2/3.png',
                    title: '02-050',
                },
                {
                    img  : 'step-2/4.png',
                    title: '02-068',
                },
                {
                    img  : 'step-2/5.png',
                    title: '02-051',
                },
                {
                    img  : 'step-2/6.png',
                    title: '02-076',
                },
                {
                    img  : 'step-2/7.png',
                    title: '02-066',
                },
                {
                    img  : 'step-2/8.png',
                    title: '02-094',
                },
                {
                    img  : 'step-2/9.png',
                    title: '02-062',
                },
                {
                    img  : 'step-2/10.png',
                    title: '02-117',
                },
                {
                    img  : 'step-2/11.png',
                    title: '02-171',
                },
            ],
            retainerStatus        : '',

            stepThreeProductGasketProfile     : [
                {
                    img     : 'step-3/1.png',
                    order   : '02-070',
                    color   : 'Gray',
                    material: 'Vinyl',
                    note    : 'Standard Mount'
                },
                {
                    img     : 'step-3/2.png',
                    order   : '02-126',
                    color   : 'Gray',
                    material: 'Vinyl',
                    note    : 'Standard Mount'
                },
                {
                    img     : 'step-3/3.png',
                    order   : '02-315',
                    color   : 'Gray',
                    material: 'Santoprene',
                    note    : 'Standard Mount'
                }
            ],
            stepThreeProductGasketProfileFinal: [
                {
                    img  : 'step-3/final.png',
                    order: '02-068',
                }
            ],

            gasketProfileStatus: '',

            stepThreeProductGasket      : '',
            stepFourProductGasketProfile: '',

            stepFiveProductGasketModal: {
                'input-one': '0',
                'input-two': '0',
            },

            stepSixProductGasketProfile     : '',
            stepSixProductGasketDoor        : '',
            stepSevenProductGasketTotalPrice: '',
            nextStep                        : false
        }

    },
    computed: {
        stepOneValue() {
            let check = true;
            Object.entries(this.stepFiveProductGasketModal).forEach(item => {
                if (item[1] !== '0') {
                    check = false
                }
            })
            return check
        }
    },

    created() {
        this.currentWidth = window.innerWidth;
        window.addEventListener("resize", this.handleCurrentWidth);
    },

    methods: {
        handleCurrentWidth() {
            this.currentWidth = window.innerWidth;
        },

        handleNextPrev(data, order) {
            this.orderStep = data;
            this.nextStep  = false;
            if (order === 'prev') {
                if (data > 1) {
                    this.orderStep -= 1
                }
            } else {
                if (this.orderStep < 4) {
                    this.orderStep += 1
                }
            }
        },
        handleStepOne(name) {
            document.querySelector('body').classList.add('modalShow')
            this.step             = name
            this.currentStepValue = this.stepFiveProductGasketModal[this.step];
            this.showModal        = true;

        },

        closeModel() {
            this.stepFiveProductGasketModal[this.step] = this.currentStepValue;
            this.showModal                             = false;
            this.step                                  = ''
            this.currentStepValue                      = ''
            document.querySelector('body').classList.remove('modalShow')
        },
        confirmModel() {
            this.stepFiveProductGasketModal[this.step] === '' ? this.stepFiveProductGasketModal[this.step] = 0 : this.stepFiveProductGasketModal[this.step]
            this.showModal        = false;
            this.step             = ''
            this.currentStepValue = ''
            document.querySelector('body').classList.remove('modalShow')
        }
    }

};