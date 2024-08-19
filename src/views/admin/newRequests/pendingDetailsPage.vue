<template>
    <div class="offerDetailsMainContainer">
        <div class="offerHeader">
            <i class="pi pi-arrow-left" style="margin: 1vh 0 1vh 5vh;font-size: 1.5rem; cursor: pointer;" @click="handleBackNavigation"></i>
            <h1 class="offerHeading">Offer Details</h1>
        </div>
        <div class="offerHeadingContainer">
            <h2 class="offerHeadingDetails">Monkey D Luffy - 7376222AL155</h2>
            <div class="buttonsContainer">
                <button class="cancelButton" @click="showModal = true">
                        <i class="pi pi-times" style="margin: 0rem 0.6rem 0.2rem 0rem;font-size: 1.3rem; cursor: pointer;"></i>Reject
                </button>
                <button class="approveButton"><i class="pi pi-check" style="margin: 0rem 0.6rem 0.2rem 0rem;font-size: 1.3rem; cursor: pointer;"></i>Approve</button>
            </div>
        </div>
        <Modal :isVisible="showModal" @close="showModal = false">
            <template v-slot:header>
                <h2>Reason for Rejection</h2>
            </template>
            <template v-slot:body>
                <input v-model="rejectionReason" type="text" class="reasonInput" placeholder="Enter your reason" />
            </template>
            <template v-slot:footer>
                <div class="bottomButtonContainer">
                    <button class="cancelButton" @click="showModal = false">Cancel</button>
                    <button class="approveButton" @click="submitRejection">Submit</button>
                </div>
            </template>
        </Modal>
        <div class="offerContentContainer">
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Name  <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">Monkey D Luffy</h2>
                </div>
            </div>
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Roll Number <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">7376222AL155</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Gender<span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">Male </h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Mobile Number<span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">9876543210</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Degree <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">Artificial Intelligence And Machine Learning</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Branch <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">B.Tech</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Batch <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">2022-2026 </h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Native <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">North Blue</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Company name <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">Straw Hats Private Limited</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Company Category <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">IT product</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Placement Organized By <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">Own</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Company Location <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">Coimbatore , Tamil Nadu</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Internship Joining Date  <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">21.07.2025</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Stipend <span style="color: red;">*</span> </h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">15000 /- </h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Company CTC <br /> (Salary) <span style="color: red;">*</span> </h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">21.07.2025</h2>
                </div>
            </div>
            <div class=" offerDetialsProofContainer">
                <div class="offerLeftProofContainer">
                    <h2 class="offerDetailsHeading">Available Proofs <span style="color: red;">*</span> </h2>
                </div>
                <div class="offerRightProofContainer">
                    <div class="checkBoxInputContainer">
                        <input class = "ProofCheckBox" type="checkbox" id="mailConfirmation" v-model="checkboxes.mailConfirmation">
                        <label class = "offerDetailsContent" for="mailConfirmation">Mail Confirmation </label>
                    </div>

                    <div class="checkBoxInputContainer">
                        <input class = "ProofCheckBox" type="checkbox" id="internshipLetter" v-model="checkboxes.internshipLetter">
                        <label class = "offerDetailsContent"  for="internshipLetter">Internship Letter  </label>
                    </div>

                    <div class= "checkBoxInputContainer"> 
                        <input class = "ProofCheckBox" type="checkbox" id="letterOfIntent" v-model="checkboxes.letterOfIntent">
                        <label class = "offerDetailsContent"  for="letterOfIntent">Letter of Intent  </label>
                    </div>

                    <div class= "checkBoxInputContainer"> 
                        <input class = "ProofCheckBox" type="checkbox" id="OfferLetter" v-model="checkboxes.OfferLetter">
                        <label class = "offerDetailsContent"  for="OfferLetter">Offer Letter </label>
                    </div>
                </div>
            </div>
            <div class = "offerFileUploadContainer">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Mail Confirmation (Screen Shot) <br /> size (less than 1MB) <span style="color: red;">*</span> </h2>
                </div>
                <div class="offerRightContainer">
                    <div>
                     <button class="custom-file-input">
                        <a :href="MailImgSrc" target="_blank" v-if="MailImgSrc">
                            <img :src="CloudUpload" alt="Cloud Upload" style="width: 18vh; height:18vh; margin-right: 0.5vh;"/>
                        </a>
                    </button>
                    </div>
                </div>
            </div>

            <div class = "offerFileUploadContainer">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Internship Letter <br /> size (less than 1MB) <span style="color: red;">*</span> <br />(pdf Only)  </h2>
                </div>
                <div class="offerRightContainer">
                    <div>
                     <button class="custom-file-input">
                        <a :href="IlPdfSrc" target="_blank" v-if="IlPdfSrc">
                            <img :src="CloudUpload" alt="Cloud Upload" style="width: 18vh; height:18vh; margin-right: 0.5vh;"/>
                        </a>
                    </button>
                    </div>
                </div>
            </div>

            <div class = "offerFileUploadContainer">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Letter of Intent (LOT)  <br /> size (less than 1MB) <span style="color: red;">*</span> <br />(pdf Only)  </h2>
                </div>
                <div class="offerRightContainer">
                    <div>
                     <button class="custom-file-input">
                        <a :href="LOTPdfSrc" target="_blank" v-if="LOTPdfSrc">
                            <img :src="CloudUpload" alt="Cloud Upload" style="width: 18vh; height:18vh; margin-right: 0.5vh;"/>
                        </a>
                    </button>
                    </div>
                </div>
            </div>

            <div class = "offerFileUploadContainer">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Offer Letter <br /> size (less than 1MB) <span style="color: red;">*</span> <br />(pdf Only)  </h2>
                </div>
                <div class="offerRightContainer">
                    <div>
                     <button class="custom-file-input">
                        <a :href="OLPdfSrc" target="_blank" v-if="OLPdfSrc">
                            <img :src="CloudUpload" alt="Cloud Upload" style="width: 18vh; height:18vh; margin-right: 0.5vh;"/>
                        </a>
                    </button>
                    </div>
                </div>
            </div>
            
        </div>
        <div>
        </div>
    </div>
</template>

<script>
import 'primeicons/primeicons.css';
import CloudUpload from '../../../assets/cloudUpload.png';
import Modal from '@/components/Modal.vue';

export default {
    name: "PendingDetailsPage",
    components: {
        Modal
    },
    data() {
        return {
            checkboxes: {
                mailConfirmation: false,
                internshipLetter: false,
                letterOfIntent: false
            },
            CloudUpload: CloudUpload,
            status: 'Rejected',
            rejectedReason: 'Mail Confirmation not uploaded',
            MailImgSrc : CloudUpload,
            IlPdfSrc : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            LOTPdfSrc : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            OLPdfSrc : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            showModal: false,
            rejectionReason: ''

        };
    },
    methods : {
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        handleBackNavigation() {
            this.$router.push('/admin/home');
        },
        submitRejection() {
            console.log( "rejection reason",this.rejectionReason);
            this.showModal = false;
        }

    }
}
</script>

<style scoped>
.hidden {
    display: none;
}
.buttonsContainer{
    display: flex;
    justify-content: space-around;
    margin: 1vh 0 1vh 0;
    width : 35%;
}

.cancelButton {
    background-color: #FF0000;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 2vh 2.5vh;
    cursor: pointer;
    font-size: 1.2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.cancelButton:hover {
    background-color: #cc0000;
    transform: translateY(-2px);
}

.cancelButton:active {
    background-color: #b30000;
    transform: translateY(0);
}

.approveButton {
    background-color: #8540ca;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 2vh 2.5vh;
    cursor: pointer;
    font-size: large;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.approveButton:hover {
    background-color: #7411d6;
    transform: translateY(-2px);
}

.reasonInput {
    width: 90%;
    height: 15vh;
    border-radius: 1.2rem;
    padding: 1vh;
    font-size: 1rem;
    margin: 1vh 0;
    border: 1px solid #8540ca; /* Remove default border */
    background: #08080B; 
    color: #ffff;
    position: relative;
    z-index: 1;
}

.reasonInput::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 1.2rem;
    z-index: -1;
}

.reasonInput::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1.2rem;
    background: #18191A; /* Background color of the input */
    z-index: -2;
}

.bottomButtonContainer{
    display: flex;
    justify-content: space-around;
    margin: 1vh 0 1vh 0;
    width : 95%;
}


</style>
