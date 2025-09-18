<template>
    <div class="offerDetailsMainContainer">
        <div class="offerHeader">
            <i class="pi pi-arrow-left" style="margin: 1vh 0 1vh 5vh;font-size: 1.5rem; cursor: pointer;" @click="handleBackNavigation"></i>
            <h1 class="offerHeading">Offer Details</h1>
        </div>
        <div class="offerHeadingContainer">
            <h2 class="offerHeadingDetails">{{ offerDetails.name }} - {{  offerDetails.rollNo }}</h2>
            <div class="buttonsContainer">
                <button class="cancelButton" @click="showModal = true">
                        <i class="pi pi-times" style="margin: 0rem 0.6rem 0.2rem 0rem;font-size: 1.3rem; cursor: pointer;"></i>Reject
                </button>
                <button class="approveButton" @click="approveOffer">
                    <i class="pi pi-check" style="margin: 0rem 0.6rem 0.2rem 0rem;font-size: 1.3rem; cursor: pointer;"></i>Approve</button>
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
                    <h2 class="offerDetailsHighlight">{{ offerDetails.name }}</h2>
                </div>
            </div>
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Roll Number <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">{{ offerDetails.rollNo }}</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Gender<span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent"> {{ offerDetails.gender }}</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Mobile Number<span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">{{ offerDetails.mobile }}</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Degree <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">{{ offerDetails.degree }}</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Branch <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">{{ offerDetails.branch }}</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Batch <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent"> {{ offerDetails.batchName }} </h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Company name <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">{{  offerDetails.companyName }}</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Company Category <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">{{ offerDetails.companyCategory }}</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Placement Organized By <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">{{ offerDetails.organizedBy }}</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Company Location <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">{{ offerDetails.companyLocation }}</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Internship Joining Date  <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">{{ offerDetails.internshipDate }}</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Stipend <span style="color: red;">*</span> </h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">{{ offerDetails.stipend }} /- </h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Company CTC <br /> (Salary) <span style="color: red;">*</span> </h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">{{ offerDetails.companyCtc }}</h2>
                </div>
            </div>

            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Placed Date <span style="color: red;">*</span> </h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">{{ offerDetails.placedDate }}</h2>
                </div>
            </div>


            <div class="offerDetialsProofContainer">
                <div class="offerLeftProofContainer">
                    <h2 class="offerDetailsHeading">Available Proofs <span style="color: red;">*</span> </h2>
                </div>
                <div class="offerRightProofContainer">
                    <div class="checkBoxInputContainer" v-for="(checked, proofType) in checkboxes" :key="proofType">
                        <input class="ProofCheckBox" type="checkbox" :id="proofType" v-model="checkboxes[proofType]" disabled>
                        <label class="offerDetailsContent" :for="proofType">{{ proofType.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()) }}</label>
                    </div>
                </div>
            </div>


            <div class="offerFileUploadContainer" v-if="MailImgSrc">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Mail Confirmation (Screen Shot) <br /> size (less than 1MB) <span style="color: red;">*</span> </h2>
                </div>
                <div class="offerRightContainer">
                    <div>
                        <button class="custom-file-input">
                            <a :href="MailImgSrc" target="_blank">
                                <img :src="CloudUpload" alt="Cloud Upload" style="width: 18vh; height:18vh; margin-right: 0.5vh;" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div class="offerFileUploadContainer" v-if="IlPdfSrc">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Internship Letter <br /> size (less than 1MB) <span style="color: red;">*</span> <br />(pdf Only) </h2>
                </div>
                <div class="offerRightContainer">
                    <div>
                        <button class="custom-file-input">
                            <a :href="IlPdfSrc" target="_blank">
                                <img :src="CloudUpload" alt="Cloud Upload" style="width: 18vh; height:18vh; margin-right: 0.5vh;" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div class="offerFileUploadContainer" v-if="LOTPdfSrc">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Letter of Intent (LOT) <br /> size (less than 1MB) <span style="color: red;">*</span> <br />(pdf Only) </h2>
                </div>
                <div class="offerRightContainer">
                    <div>
                        <button class="custom-file-input">
                            <a :href="LOTPdfSrc" target="_blank">
                                <img :src="CloudUpload" alt="Cloud Upload" style="width: 18vh; height:18vh; margin-right: 0.5vh;" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div class="offerFileUploadContainer" v-if="OLPdfSrc">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Offer Letter <br /> size (less than 1MB) <span style="color: red;">*</span> <br />(pdf Only) </h2>
                </div>
                <div class="offerRightContainer">
                    <div>
                        <button class="custom-file-input">
                            <a :href="OLPdfSrc" target="_blank">
                                <img :src="CloudUpload" alt="Cloud Upload" style="width: 18vh; height:18vh; margin-right: 0.5vh;" />
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
import axios from 'axios';
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
                letterOfIntent: false,
                OfferLetter: false
            },
            CloudUpload: CloudUpload,
            status: '',
            rejectedReason: '',
            MailImgSrc: '',
            IlPdfSrc: '',
            LOTPdfSrc: '',
            OLPdfSrc: '',
            showModal: false,
            offerDetails: {
                name: '',
                rollNo: '',
                Gender: '',
                dob: '',
                mobile: '',
                degree: '',
                branch: '',
                batch: '',
                companyName: '',
                companyCategory: '',
                organizedBy: '',
                companyLocation: '',
                internshipDate: '',
                stipend: '',
                companyCtc: '',
                placedDate: '',
                availableProofs: []
            }
        };
    },
    methods: {
        async fetchOfferDetails() {
            const offerId = this.$route.params.id;
            try {
                const response = await axios.get(`https://napoleon-p829.onrender.com/offer/pendingDetails/${offerId}`);
                this.mapOfferDetails(response.data);
            } catch (error) {
                console.error('Error fetching offer details:', error);
            }
        },
        mapOfferDetails(data) {
            this.offerDetails = {
                ...data,
                dob: data.dob ? data.dob.split('T')[0] : '',
                internshipDate: data.internshipDate ? data.internshipDate.split('T')[0] : '',
                placedDate: data.placedDate ? data.placedDate.split('T')[0] : ''
            };

            // Map available proofs
            data.availableProofs.forEach(proof => {
                if (proof.type === 'mail confirmation') {
                    this.MailImgSrc = `https://napoleon-p829.onrender.com/${proof.filePath}`;
                    this.checkboxes.mailConfirmation = true;
                } else if (proof.type === 'Internship letter') {
                    this.IlPdfSrc = `https://napoleon-p829.onrender.com/${proof.filePath}`;
                    this.checkboxes.internshipLetter = true;
                } else if (proof.type === 'letter of intent') {
                    this.LOTPdfSrc = `https://napoleon-p829.onrender.com/${proof.filePath}`;
                    this.checkboxes.letterOfIntent = true;
                } else if (proof.type === 'offer letter') {
                    this.OLPdfSrc = `https://napoleon-p829.onrender.com/${proof.filePath}`;
                    this.checkboxes.OfferLetter = true;
                }
            });
        },
        handleBackNavigation() {
            this.$router.push('/admin/home');
        },
        async updateStatus(status, rejectedReason = '') {
            const offerId = this.$route.params.id;
            try {
                const response = await axios.put(`https://napoleon-p829.onrender.com/offer/updateStatus/${offerId}`, {
                    status,
                    rejectedReason
                });
                console.log('Status updated successfully:', response.data);
                this.handleBackNavigation(); // Navigate back after updating status
            } catch (error) {
                console.error('Error updating status:', error);
            }
        },
        approveOffer() {
            this.updateStatus('Approved');
        },
        rejectOffer() {
            this.updateStatus('Rejected', this.rejectionReason);
        },
        submitRejection() {
            this.rejectOffer();
            this.showModal = false;
        }
    },
    mounted() {
        this.fetchOfferDetails();
    }
};
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
