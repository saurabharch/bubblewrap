/*
 * Copyright 2020 Google Inc. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

<<<<<<< HEAD
// Following the instructions from here : https://developers.google.com/android-publisher/tracks

=======
>>>>>>> f4c3f2c43720641142f0e2cb3e2e7d65d7a67d7b
 import { google } from 'googleapis';

 // Clean this up. Borrowed from chromeos/pwa-play-billing
const jwtClient = new google.auth.JWT(
    myconfig.serviceAccountEmail,
    undefined,
    myconfig.serviceAccountPrivateKey,
    myconfig.scopes,
);

const playApi = google.androidpublisher({
    version: 'v3',
    auth: jwtClient,
});

<<<<<<< HEAD
// Step 1
// Source : https://developers.google.com/android-publisher/api-ref/rest/v3/edits/insert
=======
>>>>>>> f4c3f2c43720641142f0e2cb3e2e7d65d7a67d7b
export async function GenerateAppEdit() {
    try {
        const apiResponse = (
            await playApi.edits.insert({packageName: myconfig.packageName})
        )
    } catch (error) {
        console.error(`Cannot generate an app edit : ${error}`);
    }
<<<<<<< HEAD
    // TODO(nohe427): Export to an app edit type
}

// Step 2
// Source : https://developers.google.com/android-publisher/api-ref/rest/v3/edits.bundles/list
export async function ListAllAppBundles() {
    try {
        // TODO(nohe427): editID comes from the app edit I believe.
        const apiResponse = (
            await playApi.edits.bundles.list({
                // Identifier of the edit
                editId = '',
                // Package name
                packageName = myconfig.packageName,
            })
        )
    } catch (error) {
        console.error(`Cannot list all the app bundles : ${error}`);
    }
    //TODO(nohe427): Add in the response body.
}

// Step 3
// Souce : https://developers.google.com/android-publisher/api-ref/rest/v3/edits.bundles
export async function isOurBundleHighestAvailable() {
    // TODO(nohe427): Validate that our bundle is the highest available after iterating over all the app bundles
}

// Step 4
// Source : https://developers.google.com/android-publisher/api-ref/rest/v3/edits.bundles/upload
// Tips For Uploading : https://developers.google.com/android-publisher/upload


=======
    // Export to an app edit type
}

>>>>>>> f4c3f2c43720641142f0e2cb3e2e7d65d7a67d7b
