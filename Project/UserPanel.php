
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gate Pass System - HEMAS Holdings Pvt Ltd.</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
 
</head>
<body>
    <a href="./index.html"> <img src="./Assests/MainLogo.png" alt="Company Logo" class="company-logo"> </a>



    <!-- NEW REQUEST -->

    <div class="AsminDataContainer" id="newRequest">

        <div class="userNavPanel">
                <button id="newRequestBtn">New Request</button>
            <button id="myRequestBtn">My Requests</button>
            <button id="requestHistoryBtn">History</button>
        </div>
    
        <div class="subContainer">
                <div class="UserRequestViewPanel">
                    <h1>
                        <span class="Tone1"> New   </span> 
                        <span class="Tone2">  Request </span> 
                    </h1>
                    <div class="RequestForm">
                        <form action="NewRequest.php" method="post">
                            <label for="requestorMail">Requestor Email</label><br>
                            <input type="email" id="requestorMail" name="requestorMail" required><br><br>
                            <label for="reasonCategory">Reason Category</label><br>
                            <select id="reasonCategory" name="reasonCategory" required>
                                <option value="">Select Category</option>
                                <option value="Personal">Personal</option>
                                <option value="Official">Official</option>
                            </select><br><br>
                            <label for="reasonNote">Reason Note</label><br>
                            <textarea id="reasonNote" name="reasonNote" rows="4" cols="139" required></textarea><br><br>
                            <label for="outTime">Out Time</label><br>
                            <input type="time" id="outTime" name="outTime" required><br><br>
                            <label for="vehicleType">Vehicle Type</label><br>
                            <select id="vehicleType" name="vehicleType" required>
                                <option value="">Select Vehicle Type</option>
                                <option value="Car">Car</option>
                                <option value="Motorcycle">Van</option>
                                <option value="Truck">Bus</option>
                            </select><br><br>
                            <label for="vehicleNo">Vehicle No</label><br>
                             <select id="vehicleNo" name="vehicleNo" required>
                                <option value="">Select Vehicle</option>
                                <?php
                                $servername = "localhost";
                                $username = "WebUser";
                                $password = "12345678";
                                $dbname = "gatepass";

                                $conn = new mysqli($servername, $username, $password, $dbname);
    
                            
                                if ($conn->connect_error) {
                                    die("Connection failed: " . $conn->connect_error);
                                }
    
                                
                                $sql = "SELECT VehicleNo FROM vehicledetails";
                                $result = $conn->query($sql);
    
                               
                                if ($result->num_rows > 0) {
                                 
                                    while ($row = $result->fetch_assoc()) {
                                        echo "<option value='" . $row["VehicleNo"] . "'>" . $row["VehicleNo"] . "</option>";
                                    }
                                } else {
                                    echo "<option value=''>No Vehicles Found</option>";
                                }
    
                          
                                $conn->close();
                                ?>
                            </select><br><br>

                            <br><br>
                        <div class="buttonlayout">
                            <button type="submit">Submit</button>
                            <button type="button" onclick="clearForm()">Clear</button>
                        </div>

                        </form>
                        
                    </div>
                </div>
        </div>
    

    </div>
    
    
    <!-- MY REQUESTS -->
    
    <div class="AsminDataContainer hidden" id="myRequestsContainer">
    
        <div class="userNavPanel">
            <button id="newRequestBtn2">New Request</button>
                <button id="myRequestBtn2">My Requests</button>
            <button id="requestHistoryBtn2">History</button>
        </div>
    
        <div class="subContainer">



            <div class="adminReportViewPanel">
                <h1>
                    <span class="Tone1"> Today's  </span> 
                    <span class="Tone2">  Requests </span> 
                </h1>
               
                <table>
                    <thead>
                        <tr>
                            <th>Request ID</th>
                            <th>Requestor</th>
                            <th>Check Out</th>
                            <th>Check In</th>
                            <th>Vehicle No</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>GPID 0000120</td>
                            <td>user1@hemas.com</td>
                            <td>30/03/2024 10:00</td>
                            <td>30/03/2024 15:20</td>
                            <td>CAV-0512</td>
                        </tr>
                        <tr>
                            <td>GPID 0000121</td>
                            <td>user2@hemas.com</td>
                            <td>30/03/2024 11:00</td>
                            <td>30/03/2024 14:20</td>
                            <td>KC-7852</td>
                        </tr>

                    </tbody>
                </table>
            </div>
         </div>
    </div>


    <!-- MY HISTORY -->
    
    <div class="AsminDataContainer hidden" id="myRequestsHistoryContainer">
    
        <div class="userNavPanel">
            <button id="newRequestBtn3">New Request</button>
            <button id="myRequestBtn3">My Requests</button>
                <button id="requestHistoryBtn3">History</button>
        </div>
    
        <div class="subContainer">



            <div class="adminReportViewPanel">
                <h1>
                    <span class="Tone1"> My Requests  </span> 
                    <span class="Tone2">  History </span> 
                </h1>
               
                <table>
                    <thead>
                        <tr>
                            <th>Request ID</th>
                            <th>Requestor</th>
                            <th>Check Out</th>
                            <th>Check In</th>
                            <th>Vehicle No</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>GPID 0000120</td>
                            <td>user1@hemas.com</td>
                            <td>30/03/2024 10:00</td>
                            <td>30/03/2024 15:20</td>
                            <td>CAV-0512</td>
                        </tr>
                        <tr>
                            <td>GPID 0000121</td>
                            <td>user2@hemas.com</td>
                            <td>30/03/2024 11:00</td>
                            <td>30/03/2024 14:20</td>
                            <td>KC-7852</td>
                        </tr>

                    </tbody>
                </table>
            </div>
         </div>
    </div>





<script src="./UserScript.js"></script>
</body>
</html>