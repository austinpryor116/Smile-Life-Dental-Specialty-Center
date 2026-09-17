export interface ProcedureContent {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  whatItIs: string;
  whyWeDoIt: string;
  whatToExpect: string;
  externalLink?: {
    url: string;
    text: string;
  };
}

export const periodontalProcedures: Record<string, ProcedureContent> = {
  'scaling-and-root-planing': {
    id: '1',
    slug: 'scaling-and-root-planing',
    title: 'Scaling & Root Planing',
    subtitle: 'Advanced non-surgical biological regulation.',
    heroImage: 'assets/images/dental-implant.jpeg',
    whatItIs: 'Scaling and Root Planing (SRP), often coupled with advanced LANAP® laser therapy at Smile Life, is a meticulous deep-cleaning protocol. Dr. Sara Alhachache utilizes high-magnification optics to help isolate and remove calcified calculus (tartar) and bacterial plaque found beneath the gumline.',
    whyWeDoIt: 'Periodontal disease is a bacterial infection that can aggressively affect the structural bone supporting your teeth. We perform SRP to help manage and disrupt this bacterial presence. By altering the localized micro-environment of your periodontal pockets, Dr. Sara aims to address the inflammatory cascade, which supports both your oral health and overall systemic wellness.',
    whatToExpect: 'Patient comfort is a primary focus for Dr. Sara Alhachache. Patients receive localized anesthesia to keep the procedure as comfortable as possible. Specialized ultrasonic instruments are used to gently disrupt the bacterial matrices, typically resulting in a minimally invasive experience with little postoperative downtime.'
  },
  'crown-lengthening': {
    id: '2',
    slug: 'crown-lengthening',
    title: 'Crown Lengthening',
    subtitle: 'Restoring aesthetic and structural harmony.',
    heroImage: 'assets/images/dr-sara-holding-implant.jpg',
    whatItIs: 'Clinical Crown Lengthening is a highly specialized microsurgical procedure where Dr. Sara Alhachache aims to reshape the gum and bone architecture surrounding a tooth. This delicately exposes more of the natural tooth structure that may be hidden beneath an asymmetrical or overly prominent gumline.',
    whyWeDoIt: 'This is typically performed for two key reasons: structurally, to expose enough solid foundation for a restorative dentist to securely place a dental crown; or aesthetically, to address a "gummy smile" and establish more balanced proportions for facial harmony.',
    whatToExpect: 'Utilizing microsurgical instruments and precision techniques, the gums are carefully contoured. The procedure is executed under profound localized anesthesia to prioritize your comfort. Healing integrates with our specialized post-operative protocols to ensure your foundation is securely established for restorative placement.'
  },
  'gum-grafting': {
    id: '3',
    slug: 'gum-grafting',
    title: 'Soft Tissue Optimization',
    subtitle: 'Protecting the vulnerable root surface.',
    heroImage: 'assets/images/dental-implant.jpeg',
    whatItIs: 'Soft Tissue Gingival Grafting is an advanced surgical procedure designed to address gum recession. Utilizing periodontic techniques, Dr. Sara Alhachache carefully relocates healthy donor tissue (either from your own palate or an advanced sterile matrix) and micro-sutures it over exposed tooth roots.',
    whyWeDoIt: 'Gum recession can expose the more vulnerable root of the tooth, which often causes thermal sensitivity and may increase the risk of root decay. Dr. Sara performs this surgery with the goal of rebuilding the protective biological barrier around your teeth, aimed at improving both comfort and longevity.',
    whatToExpect: 'As a periodontist, Dr. Sara Alhachache utilizes ultra-fine microsutures (often thinner than a human hair) to encourage proper tissue integration. You will be provided with detailed recovery protocols and, if needed, custom healing stents to promote maximum comfort while the tissue integrates over the following weeks.'
  },
  'guided-bone-regeneration': {
    id: '4',
    slug: 'guided-bone-regeneration',
    title: 'Guided Bone Regeneration',
    subtitle: 'Encouraging anatomical architecture.',
    heroImage: 'assets/images/dr-sara-holding-implant.jpg',
    whatItIs: 'Guided Bone & Tissue Regeneration (GBR) is a complex biological procedure. Dr. Sara Alhachache surgically introduces FDA-approved osteoconductive bone graft particulate and specialized barrier membranes (resorbable or non-resorbable) into areas where the jawbone has deteriorated or resorbed.',
    whyWeDoIt: 'When a tooth is lost or periodontal disease affects the jaw, the bone naturally begins to resorb over time. We execute GBR to help preserve ridge volume and encourage new bone growth. This is generally a critical step for establishing the necessary three-dimensional anchor volume required to place a functional dental implant.',
    whatToExpect: 'During this surgical intervention, Dr. Sara carefully places the graft material into the target area. A specialized membrane is often placed over the graft to intelligently restrict fast-growing gum cells and allow the slower-growing bone cells to colonize the space. The body gradually processes the graft material, typically fully integrating it over a 4 to 6 month period.'
  },
  'cosmetic-periodontal-surgery': {
    id: '5',
    slug: 'cosmetic-periodontal-surgery',
    title: 'Aesthetic Periodontal Design',
    subtitle: 'The architectural framework of your smile.',
    heroImage: 'assets/images/dental-implant.jpeg',
    whatItIs: 'Cosmetic Periodontal Surgery encompasses a highly curated suite of precision micro-procedures designed to re-contour, re-shape, and re-balance the aesthetic envelope of the smile. Dr. Sara Alhachache aims to architect the soft tissue to frame your teeth more naturally and harmoniously.',
    whyWeDoIt: 'Even beautiful restorative work can appear unnatural if the gumline framing it is uneven or disproportionate. We perform these aesthetic surgeries to harmonize the pink tissue with the white enamel, aiming to maximize your cosmetic investment and create a balanced, aesthetically pleasing smile.',
    whatToExpect: 'Leveraging her background in aesthetic geometry, Dr. Sara carefully analyzes the proportions of your teeth. Using state-of-the-art soft tissue lasers and microsurgery, the gumline is adjusted with extreme precision. The procedure is often coordinated closely with your cosmetic restorative dentist.'
  },
  'dental-implants': {
    id: '6',
    slug: 'dental-implants',
    title: 'Advanced Implantology',
    subtitle: 'The restoration of form and function.',
    heroImage: 'assets/images/dr-sara-holding-implant.jpg',
    whatItIs: 'Dental Implantology involves the precise surgical placement of a medical-grade titanium foundation directly into the jawbone. Acting as an artificial tooth root, the implant is designed to biologically fuse with your bone over time, creating a sturdy base for the attachment of a custom porcelain crown.',
    whyWeDoIt: 'Losing a tooth can initiate a chain reaction of bone loss and the shifting of adjacent teeth. Dental implants are unique in that they help stimulate the jawbone to preserve its volume. Dr. Sara Alhachache places implants to organically replace missing teeth without having to grind down healthy adjacent teeth (as is necessary with a traditional bridge).',
    whatToExpect: 'Implant surgery with Dr. Sara relies on high-definition 3D CBCT imaging. The angulation and depth of the implant are mapped out well before your procedure. The actual surgical placement is heavily planned, with many patients reporting that the process was more manageable and comfortable than they initially anticipated.'
  },
  'all-on-x': {
    id: '7',
    slug: 'all-on-x',
    title: 'All-On-X Full Arch Reconstruction',
    subtitle: 'Comprehensive full-mouth rehabilitation.',
    heroImage: 'assets/images/dental-implant.jpeg',
    whatItIs: 'All-On-X (also known as full-arch implant reconstruction) is a transformative surgical protocol where an entire arch of compromised or missing teeth is replaced by a fixed, full-arch prosthetic bridge. This bridge is securely anchored to the jawbone using a strategic series of 4 to 6 specialized titanium implants.',
    whyWeDoIt: 'For patients facing widespread tooth loss, severe periodontal disease, or struggling with loose conventional dentures, All-On-X offers a highly functional and aesthetic alternative. Dr. Sara Alhachache coordinates this procedure to help patients regain proper chewing capability, speech function, and the natural aesthetics of a complete, confident smile.',
    whatToExpect: 'This is a highly coordinated procedure that begins with extensive 3D digital planning to evaluate your bone density. In many cases, any necessary extractions, bone contouring, and the placement of the implants can happen in a single surgical sitting. Dr. Sara prioritizes your comfort throughout this complex rehabilitation.'
  },
  'osseous-surgery': {
    id: '8',
    slug: 'osseous-surgery',
    title: 'Osseous Resective Surgery',
    subtitle: 'Re-engineering compromised bone architecture.',
    heroImage: 'assets/images/dr-sara-holding-implant.jpg',
    whatItIs: 'Osseous Surgery (also known as pocket reduction surgery) is a precise periodontal procedure where Dr. Sara Alhachache temporarily retracts the gum tissue to directly access and clean the tooth roots and infected alveolar bone. The irregular, bacteria-damaged bone is then carefully smoothed and reshaped.',
    whyWeDoIt: 'Advanced periodontal disease actively melts away the bone surrounding your teeth, creating deep, jagged defects (pockets) where virulent bacteria can hide and rapidly multiply. We perform this surgery to eliminate these deep pockets, smooth the bacterial hiding spots, and allow the gum tissue to firmly reattach to healthy bone.',
    whatToExpect: 'Executed under profound localized anesthesia, Dr. Sara utilizes specialized microsurgical instruments to carefully contour the bone. The gums are then secured back into place with micro-sutures. Proper post-operative rest and adherence to our healing protocols typically result in a very manageable recovery.'
  },
  'laser-periodontal-therapy': {
    id: '9',
    slug: 'laser-periodontal-therapy',
    title: 'LANAP & LAPIP Laser Therapy',
    subtitle: 'Minimally invasive biological regeneration.',
    heroImage: 'assets/images/dental-implant.jpeg',
    whatItIs: 'LANAP® (Laser Assisted New Attachment Procedure) and LAPIP® are cutting-edge, FDA-cleared laser protocols designed to treat severe gum disease and failing dental implants without the use of scalpels or conventional sutures.',
    whyWeDoIt: 'These highly advanced laser therapies are employed to specifically target and vaporize diseased tissue and bacteria, while completely preserving the healthy tissue. This protocol uniquely aims to stimulate the body\'s natural healing cascade, helping to regenerate bone and reattach gum tissue to the teeth or implant surface.',
    whatToExpect: 'Due to the minimally invasive nature of the laser, patients typically experience significantly shorter recovery times, less postoperative inflammation, and less discomfort compared to traditional scalpel surgery. The laser promotes immediate blood clotting, meaning you can often return to normal activities much faster.',
    externalLink: {
      url: 'https://www.lanap.com/',
      text: 'Visit Official LANAP® Website'
    }
  },
  'gingivectomy-frenectomy': {
    id: '10',
    slug: 'gingivectomy-frenectomy',
    title: 'Gingivectomy & Frenectomy',
    subtitle: 'Precision soft tissue release protocols.',
    heroImage: 'assets/images/dr-sara-holding-implant.jpg',
    whatItIs: 'A Gingivectomy involves the surgical removal of excess or diseased gum tissue. A Frenectomy is a swift procedure designed to release a "frenum", a small fold of muscular tissue (like the band under the tongue or upper lip) that is abnormally tight or pulling aggressively on the gums.',
    whyWeDoIt: 'Excess gum tissue can trap massive amounts of plaque or create "gummy" smiles. A tight frenum attachment can physically pull the gums away from the teeth (causing severe recession) or restrict tongue movement and speech. Dr. Sara performs these to instantly release the tension and halt progressive tissue damage.',
    whatToExpect: 'These procedures are frequently performed using state-of-the-art soft tissue lasers, making them astonishingly fast and often entirely bloodless. Patients generally report minimal discomfort, with most returning to their day immediately following the appointment.'
  },
  'sinus-augmentation': {
    id: '11',
    slug: 'sinus-augmentation',
    title: 'Sinus Augmentation (Sinus Lift)',
    subtitle: 'Elevating the foundation for maxillary implants.',
    heroImage: 'assets/images/dental-implant.jpeg',
    whatItIs: 'A Sinus Lift is a highly specialized bone grafting procedure specifically for the upper jaw. Dr. Sara Alhachache carefully accesses the maxillary sinus cavity (located just above the upper posterior teeth) and gently elevates the delicate sinus membrane, packing advanced bone graft material beneath it.',
    whyWeDoIt: 'The bone in the upper back jaw is naturally the softest and thinnest in the body. When upper molar teeth are lost, the sinus cavity frequently expands downward, leaving inadequate bone height to place a dental implant. A sinus lift aims to restore this critical vertical height, creating a solid vault to safely anchor upper implants.',
    whatToExpect: 'This is a delicate microscopic procedure requiring elite surgical training. Patients are profoundly numbed and often opt for IV sedation. Following the procedure, stringent sinus precautions (such as avoiding nose-blowing or severe pressure changes) must be strictly adhered to for several weeks while the new bone integrates.'
  },
  'ridge-augmentation': {
    id: '12',
    slug: 'ridge-augmentation',
    title: 'Ridge Augmentation & Socket Preservation',
    subtitle: 'Preventing the collapse of the jawbone architecture.',
    heroImage: 'assets/images/dr-sara-holding-implant.jpg',
    whatItIs: 'Socket Preservation is performed immediately at the time of a tooth extraction to fill the empty void with bone graft. Ridge Augmentation is the specialized rebuilding of the width and height of the jawbone ridge long after a tooth has been lost and the bone has collapsed.',
    whyWeDoIt: 'The moment a tooth is permanently extracted, the jawbone begins to violently melt and flatten (resorb) because it no longer receives stimulation from chewing. By immediately placing a specialized particulate bone graft into the socket, Dr. Sara aims to freeze this resorption process, saving the structural dimensions needed for future implant placement.',
    whatToExpect: 'During a tooth extraction, placing a socket preservation graft only adds a few minutes to the procedure and often drastically reduces post-extraction bleeding and pain. For Ridge Augmentations, meticulous suturing and specialized biological membranes are utilized to guide the bone reformation over a period of months.'
  },
  'prf-therapy': {
    id: '13',
    slug: 'prf-therapy',
    title: 'Platelet-Rich Fibrin (PRF)',
    subtitle: 'Accelerated biological healing using your own cells.',
    heroImage: 'assets/images/dental-implant.jpeg',
    whatItIs: 'Platelet-Rich Fibrin (L-PRF) therapy is the ultimate in natural biological medicine. At the beginning of your surgery, a small sample of your own blood is drawn and immediately centrifuged in our clinical laboratory to isolate a highly concentrated matrix of your own white blood cells, platelets, and vital growth factors.',
    whyWeDoIt: 'When this concentrated PRF matrix is applied directly to surgical sites (such as extraction sockets or bone grafts), it acts as a super-charged biological engine. It aims to violently accelerate the natural healing cascade, dramatically reduce post-operative inflammation, and significantly decrease the risk of surgical infection.',
    whatToExpect: 'The blood draw is identical to a standard medical lab test and happens painlessly while you are getting situated. Because the PRF membrane is created 100% from your own biological material, there is absolutely zero risk of rejection or allergic reaction. Patients utilizing PRF typically experience remarkably faster recoveries.'
  },
  'peri-implantitis': {
    id: '14',
    slug: 'peri-implantitis',
    title: 'Peri-Implantitis & Implant Salvage',
    subtitle: 'Rescuing and decontaminating failing dental implants.',
    heroImage: 'assets/images/dr-sara-holding-implant.jpg',
    whatItIs: 'Peri-Implantitis is an aggressive bacterial infection that destroys the bone supporting an existing dental implant. Dr. Sara Alhachache specializes in complex implant salvage protocols, working to surgically access the infected implant, mechanically and chemically decontaminate the titanium surface, and attempt to regenerate the lost bone.',
    whyWeDoIt: 'Dental implants placed by non-specialists can frequently fail due to excess cement, poor surgical angulation, or lack of maintenance. If left untreated, the implant will become completely loose and fail. Our salvage protocols aim to arrest the aggressive bone loss, disinfect the site, and save your costly prosthetic investment before removal is strictly necessary.',
    whatToExpect: 'Implant salvage is highly complex. Dr. Sara often employs the LAPIP® laser protocol to safely vaporize bacteria hiding in the microscopic titanium threads without damaging the implant itself. Healing requires strict adherence to our advanced maintenance protocols to ensure the infection does not aggressively return.'
  },
  'atraumatic-extractions': {
    id: '15',
    slug: 'atraumatic-extractions',
    title: 'Atraumatic Surgical Extractions',
    subtitle: 'Strategic tooth removal designed for future architecture.',
    heroImage: 'assets/images/dental-implant.jpeg',
    whatItIs: 'An atraumatic extraction is the highly controlled, surgical removal of a failing tooth with absolute precision. Rather than forcefully "pulling" a tooth, Dr. Sara utilizes specialized microscopic instruments to gently sever the delicate periodontal ligaments, allowing the tooth to be removed without shattering the surrounding fragile jawbone.',
    whyWeDoIt: 'When a general dentist forcefully extracts a tooth, the delicate labial (front) plate of the jawbone is frequently broken or stressed, severely comprising the esthetics and stability for a future implant. Dr. Sara removes teeth atraumatically specifically to preserve every millimeter of your natural bone anatomy for immediate or future implant reconstruction.',
    whatToExpect: 'Patients are consistently surprised by how gentle and swift an atraumatic extraction feels. The entire procedure is performed under local anesthesia or IV Sedation. Because the surrounding bone is not crushed or traumatized during the extraction, post-operative swelling and pain are typically kept to a minimum.'
  },
  'iv-sedation': {
    id: '16',
    slug: 'iv-sedation',
    title: 'IV Sedation & Advanced Comfort',
    subtitle: 'The ultimate sanctuary for complex surgical care.',
    heroImage: 'assets/images/dr-sara-holding-implant.jpg',
    whatItIs: 'Intravenous (IV) Conscious Sedation is an advanced anxiety-management protocol. Dr. Sara carefully administers highly calibrated, fast-acting sedative and analgesic medications directly into your bloodstream, placing you in a relaxed, twilight-sleep state for the entire duration of your surgery.',
    whyWeDoIt: 'Complex periodontal surgeries and full-arch implant reconstructions require high precision and can take several hours. We provide IV Sedation to help manage surgical anxiety and promote maximum comfort. It allows our clinical team to work with intense focus without patient fatigue.',
    whatToExpect: 'You will experience a state of comfort almost immediately after the IV is placed. While you will be able to respond to basic commands during the procedure, you will remain highly relaxed. You must strictly follow NPO (fasting) rules prior to arrival and must have a legal escort responsible for driving you home safely.'
  }
};
