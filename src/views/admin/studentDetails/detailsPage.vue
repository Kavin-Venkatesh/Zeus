<template>
    <div class="offerDetailsMainContainer">
        <div class="offerHeader">
            <h1 class="offerHeading">Offer Details</h1>
        </div>
        <div class="offerHeadingContainer">
            <h2 class="offerHeadingDetails">{{ offer.name }} - {{ offer.rollNo }}</h2>
            <button class="DownloadDetails_button" @click = "downloadPDF">
                <i class="pi pi-download" style="margin-right: 0.5vh;"></i>
                Download
            </button>
        </div>
        <div class="offercontentContainer">
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Name  <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">{{ offer.name }}</h2>
                </div>
            </div>
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Roll Number <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">{{ offer.rollNo }}</h2>
                </div>
            </div>
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Gender<span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">{{ offer.gender }}</h2>
                </div>
            </div>
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Date of Birth<span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">{{ offer.dob }}</h2>
                </div>
            </div>
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Mobile Number<span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">{{ offer.mobile }}</h2>
                </div>
            </div>
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Degree <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">{{ offer.degree }}</h2>
                </div>
            </div>
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Branch <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">{{ offer.branch }}</h2>
                </div>
            </div>
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Batch <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">{{ offer.batchName }}</h2>
                </div>
            </div>
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Company name <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">{{ offer.companyName }}</h2>
                </div>
            </div>
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Company Category <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">{{ offer.companyCategory }}</h2>
                </div>
            </div>
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Placement Organized By <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">{{ offer.organizedBy }}</h2>
                </div>
            </div>
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Company Location <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">{{ offer.companyLocation }}</h2>
                </div>
            </div>
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Internship Joining Date  <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">{{ offer.internshipDate }}</h2>
                </div>
            </div>
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Placed Date  <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">{{ offer.placedDate }}</h2>
                </div>
            </div>
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Stipend <span style="color: red;">*</span> </h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">{{ offer.stipend }}</h2>
                </div>
            </div>
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Company CTC <br /> (Salary) <span style="color: red;">*</span> </h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">{{ offer.companyCtc }}</h2>
                </div>
            </div>

            <div class="offerDetialsProofContainer">
                <div class="offerLeftProofContainer">
                    <h2 class="offerDetailsHeading">Available Proofs <span style="color: red;">*</span> </h2>
                </div>
                <div class="offerRightProofContainer">
                    <div v-for="proof in offer.availableProofs" :key="proof._id" class="proofContainer">
                            <input class="ProofCheckBox" type="checkbox" :id="proof.type" checked disabled>
                            <label class="offerDetailsHighlight" :for="proof.type">{{  proof.type.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()) }}  </label>
                    </div>
                </div>
            </div>

            <div class="offercontentContainer">
                <div v-for="proof in offer.availableProofs" :key="proof._id" class="proofContainer">
                    <div class="offerLeftContainer">
                                    <label class="offerDetailsHeading" :for="proof.type">{{  proof.type.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()) }}  </label>
                    </div>

                <div class="offerDetailsProofContainer">
                    <div class="offerRightProofContainer">
                                <div class="offerRightProofContainer">
                                <i class="pi pi-cloud-upload "  style="font-size: 7rem ; cursor: pointer; margin: 0 0 0 10vw;" @click="openFile(proof.filePath)"></i>
                                <!-- <img v-if="proof.fileType.startsWith('image/')" :src="getFileUrl(proof.filePath)" alt="Proof Image" class="proofImage"/> -->
                                <span style="margin: 0 0 0 10vw;" >{{ proof.originalFileName }}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Status<span style="color: red;">*</span> </h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent" :class="{'rejected': offer.status === 'Rejected', 'approved': offer.status === 'Approved'}">{{ offer.status }}</h2>
                </div>
            </div>
            <div class="offerDetails" v-if="offer.status === 'Rejected'">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Reason For Rejection<span style="color: red;">*</span> </h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent" style="color: red;">{{ offer.rejectedReason }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import 'primeicons/primeicons.css';
import CloudUpload from '../../../assets/cloudUpload.png';

export default {
    name: "IndividualDetailsPage",
    data() {
        return {
            offer: {
                name: '',
                rollNo: '',
                gender: '',
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
                placedDate: '',
                stipend: '',
                companyCtc: '',
                status: '',
                rejectedReason: '',
                availableProofs: []
            },
            CloudUpload: CloudUpload
        };
    },
    methods: {
        async fetchOfferDetails() {
            const offerId = this.$route.params.id;
            try {
                const response = await axios.get(`https://napoleon-p829.onrender.com/offer/detailsPage/${offerId}`);
                this.mapOfferDetails(response.data);
            } catch (error) {
                console.error('Error fetching offer details:', error);
            }
        },
        mapOfferDetails(data) {
            this.offer = {
                ...data,
                dob: data.dob ? data.dob.split('T')[0] : '',
                internshipDate: data.internshipDate ? data.internshipDate.split('T')[0] : '',
                placedDate: data.placedDate ? data.placedDate.split('T')[0] : ''
            };
        },
        getFileUrl(filePath){
            return `https://napoleon-p829.onrender.com/${filePath}`;
        },
        openFile(filePath) {
            const fileUrl = this.getFileUrl(filePath);
            window.open(fileUrl, '_blank');
        },
        async downloadPDF() {
        try {
            const offerId = this.$route.params.id;
            const response = await axios.get(`https://napoleon-p829.onrender.com/offer/downloadPDF/${offerId}`, {
                responseType: 'blob'
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${this.offer.rollNo}_${this.offer.companyName}Offer Details.pdf`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    },
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
.rejected {
    color: red;
}
.approved {
    color: #1DB954;
}

.offerDetailsProofContainer {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%;
    align-items: center;
    justify-content: center;
}

.proofContainer {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    justify-content: space-evenly;
}

.proofLink {
    margin-left: 10px;
    display: flex;
    align-items: center;
    text-decoration: none;
}

.proofImage {
    width: 18vh;
    height: 18vh;
    margin-right: 0.5vh;
}

.offerDetailsContent {
    margin-left: 10px;
}

.offerLeftProofContainer, .offerRightProofContainer {
    flex: 1;
}

.offerRightProofContainer {
    display: flex;
    flex-direction: column;
}

</style>