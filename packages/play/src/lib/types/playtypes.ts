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


/**
 * This file contains all the relevant types for Google Play Publisher API
 */
// See https://developers.google.com/android-publisher/api-ref/rest/v3/edits
export class AppEdit {
    id = '';
    expiryTimeSeconds = '';
}

// See https://developers.google.com/android-publisher/api-ref/rest/v3/edits.bundles
export class Bundle {
    versionCode = 0;
    sha1 = '';
    sha256 = '';
}

// See https://developers.google.com/android-publisher/api-ref/rest/v3/edits.details
export class AppDetails {
    defaultLanguage = '';
    contactWebsite = '';
    contactEmail = '';
    contactPhone = '';
}