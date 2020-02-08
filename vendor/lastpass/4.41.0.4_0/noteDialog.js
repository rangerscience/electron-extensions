var NoteDialog = function(t) {
    DialogWithGroupInput.call(this, t, {
        closeButtonEnabled: !0,
        maximizeButtonEnabled: !0
    });
    var n = this;
    this.removedAttachments = null, this.addedAttachments = null, this.showAttachmentContainer = function(t) {
        t ? $("#noteDialogExistingAttachments").hide() : $("#noteDialogExistingAttachments").show()
    }, this.setFields = function(t) {
        n.setNoteFields(t);
        var e = n.noteForms[t];
        n.hiddenFields.template = e ? e.customTemplate : "", LPFeatures.allowOmarIA() && (t === Note.prototype.NOTE_TYPES.GENERIC ? $("#noteDialogLanguageDropdown").LP_hide() : $("#noteDialogLanguageDropdown").LP_show()), n.inputFields.notetype && e && e.customTemplate && !n.inputFields.notetype.disabled ? $("#deleteCustomNoteTemplate").show() : $("#deleteCustomNoteTemplate").hide()
    }, this.noteForms = {}, this.noteFormElement = null, this.noteTypeIconContainer = null, this.noteTypeOptions = [], this.temporaryNoteTypeOptionValue = null
};
NoteDialog.prototype = Object.create(DialogWithGroupInput.prototype), NoteDialog.prototype.constructor = NoteDialog,
    function(a) {
        var p = function() {
            LPProxy.copyToClipboard(this.getValue())
        };
        NoteDialog.prototype.setNoteTypeImage = function(t) {
            this.inputFields.notetype && (this.noteTypeIconContainer.children(".itemIcon").detach(), this.noteTypeIconContainer.prepend(this.inputFields.notetype.options[t].icon))
        };
        var e = function(t) {
                var e = LPTools.createElement("li", "noteDropdown", t.label);
                return e.insertBefore(n(t.value), e.firstChild), e
            },
            n = function(t) {
                var e = new NoteDisplay(new Note({
                        notetype: t
                    })),
                    n = e.buildItemIconElement();
                return e.destruct(), n
            },
            o, l;
        NoteDialog.prototype.addCustomNote = function(t) {
            var e = "Custom_" + t.id;
            if (!this.noteForms.hasOwnProperty(e)) {
                this.inputFields.notetype && this.addNoteType({
                    label: t.title,
                    value: e
                });
                for (var n = [], a = 0; a < t.fields.length; ++a) {
                    var o = t.fields[a].text;
                    switch (t.fields[a].type) {
                        case "text":
                            n.push(new DialogInput.LabelledInput(o, new DialogInput.TextInput));
                            break;
                        case "password":
                            n.push(new DialogInput.LabelledInput(o, new DialogInput.PasswordInput));
                            break;
                        case "textarea":
                            n.push(new DialogInput.LabelledInput(o, new DialogInput.TextArea));
                            break;
                        case "monthDayYear":
                            n.push(new DialogInput.LabelledInput(o, new DialogInput.AlphaDateInput));
                            break;
                        case "monthYear":
                            n.push(new DialogInput.LabelledInput(o, new DialogInput.AlphaDateInput({
                                includeDay: !1
                            })));
                            break;
                        case "textWithCopy":
                            n.push(new DialogInput.LabelledInput(o, new DialogInput.TextInput({
                                inputButton: Strings.translateString("Copy"),
                                inputButtonHandler: p
                            })))
                    }
                }
                var l = new I(n);
                l.customTemplate = JSON.stringify(t), this.noteForms[e] = l
            }
        }, NoteDialog.prototype.preSetup = function(t) {
            var e = null;
            if (t && LPFeatures.allowOmarIA()) {
                var n = null,
                    a = null;
                if (t.defaultData && t.defaultData.notetype ? (a = t.defaultData.notetype, n = LPProxy.getConfigTypeObjectByNoteType(a)) : t.vaultItem && "function" == typeof t.vaultItem.getNoteType && (n = LPProxy.getConfigTypeObjectByNoteType(t.vaultItem.getNoteType())), n) {
                    var o = n.name;
                    if ("custom" === n.id) {
                        var l = null;
                        if (t.vaultItem && t.vaultItem._data && t.vaultItem._data.template) l = JSON.parse(t.vaultItem._data.template);
                        else {
                            var p = LPProxy.getCustomTemplateIdFromNoteType(a);
                            l = LPProxy.getCustomNoteTemplate(p)
                        }
                        l && (o = l.title)
                    }
                    o = o.toLocaleLowerCase(), e = t.vaultItem ? Strings.translateString("Edit %1", o) : Strings.translateString("Add %1", o)
                }
            }
            e = e || (t && t.vaultItem ? Strings.translateString("Edit Note") : Strings.translateString("Add Note")), t ? t.title = e : t = {
                title: e
            }
        }, NoteDialog.prototype.open = function(t) {
            DialogWithGroupInput.prototype.open.call(this, $.extend(t, {
                sourceFunction: LPProxy.getNoteModel
            }))
        }, NoteDialog.prototype.defaultFields = function(t) {
            var e = t.vaultItem ? t.vaultItem.getLanguage() : "";
            !e && Note.prototype.isValidLanguage(navigator.language) && (e = navigator.language), t.defaultData = $.extend({
                notetype: t.vaultItem ? t.vaultItem.getNoteType() : Note.prototype.NOTE_TYPES.GENERIC,
                language: e || "en-US"
            }, t.defaultData), DialogWithGroupInput.prototype.defaultFields.apply(this, arguments)
        }, NoteDialog.prototype.clearFields = function(t) {
            for (var e in DialogWithGroupInput.prototype.clearFields.apply(this, arguments), this.noteForms) this.noteForms[e].inputs.clear()
        }, NoteDialog.prototype.clearErrors = function() {
            for (var t in DialogWithGroupInput.prototype.clearErrors.apply(this, arguments), this.noteForms) this.noteForms[t].inputs.clearErrors()
        }, NoteDialog.prototype.validate = function(t) {
            var e = DialogWithGroupInput.prototype.validate.apply(this, arguments),
                n;
            return "" === t.name && (this.addError("name", Strings.translateString("Name is required.")), e = !1), 45e3 < JSON.stringify(t.extra).length && (n = this, dialogs.confirmation.open({
                title: Strings.translateString("Error"),
                text: Strings.translateString("The notes field contains too much data. You may store a maximum of 45,000 characters per note. Would you like us to truncate the note for you? You will lose some of your data."),
                handler: function() {
                    n.inputFields.extra.Notes.setValue(t.extra.Notes.substring(0, 45e3))
                }
            }), e = !1), e
        }, NoteDialog.prototype.initializeAttachmentContainer = function(t) {
            this.containers.attachments = new Container(t, {
                stateChangeCallback: this.showAttachmentContainer
            }), this.containers.attachments.initialize(document.getElementById("attachmentContainer")), this.showAttachmentContainer(this.containers.attachments.isEmpty())
        }, NoteDialog.prototype.setup = function(t, e) {
            LPFeatures.allowOmarIA() ? ($("#noteDialogTypeDropdown").LP_hide(), $("#deleteCustomNoteTemplate").LP_hide(), $("#noteDialogLanguageDropdown").LP_show()) : ($("#noteDialogTypeDropdown").LP_show(), $("#deleteCustomNoteTemplate").LP_show(), $("#noteDialogLanguageDropdown").LP_hide());
            var n = e.vaultItem;
            if (this.inputFields.notetype && (n ? (this.inputFields.notetype.disable(), $("#deleteCustomNoteTemplate").hide()) : this.inputFields.notetype.enable()), e.defaultData && e.defaultData.notetype ? (e.defaultData.template && this.addCustomNote(JSON.parse(e.defaultData.template)), this.setFields(e.defaultData.notetype)) : e.vaultItem && LPFeatures.allowOmarIA() && this.setFields(e.vaultItem.getNoteType()), n && !this.inputFields.notetype.options.hasOwnProperty(n.getNoteType()) && n.getTemplate() && (this.temporaryNoteTypeOptionValue = n.getNoteType(), this.addCustomNote(JSON.parse(n.getTemplate()))), n && n.hasAttachments()) {
                for (var a = n.getAttachments(), o = [], l = 0, p = a.length; l < p; ++l) o.push(a[l].newDisplayObject());
                this.initializeAttachmentContainer(o)
            } else this.showAttachmentContainer(!0); - 1 != navigator.userAgent.indexOf(" Edge/") && ($("#noteDialogExistingAttachments").hide(), $("#addAttachmentButton").hide()), this.removedAttachments = [], this.addedAttachments = [], e.vaultItem ? t.find(".history").show() : t.find(".history").hide(), !e.vaultItem && LPFeatures.allowOmarIA() ? t.find(".dialogAllSitesButton").show() : t.find(".dialogAllSitesButton").hide(), DialogWithGroupInput.prototype.setup.apply(this, arguments)
        }, NoteDialog.prototype.addNoteType = (o = function(t, e) {
            return t.label < e.label ? -1 : t.label > e.label ? 1 : 0
        }, l = LPTools.createElement("div", {
            id: "addCustomTemplate"
        }, Strings.translateString("Add Custom Template")), $(l).bind("click", function() {
            dialogs.customNoteTemplate.open()
        }), function(t) {
            t.element = e(t), t.icon = n(t.value), this.noteTypeOptions.push(t), this.noteTypeOptions = this.noteTypeOptions.sort(o), this.inputFields.notetype.setOptions(this.noteTypeOptions), this.inputFields.notetype.dropdownElement.append(l)
        }), NoteDialog.prototype.initialize = function(t) {
            if (DialogWithGroupInput.prototype.initialize.apply(this, arguments), this.noteFormElement = a.getElementById("noteForm"), this.noteTypeIconContainer = $("#noteDialogTypeContainer"), this.inputFields.notetype)
                for (var e in this.inputFields.notetype = new DropdownInput(this.inputFields.notetype.getElement()[0]), Note.prototype.NOTE_TYPES) {
                    var n = Note.prototype.NOTE_TYPES[e];
                    this.addNoteType({
                        label: n,
                        value: n
                    })
                }! function(a) {
                    var t = function() {
                        for (var t = LPProxy.getCustomNoteTemplates(), e = 0, n = t.length; e < n; ++e) a.addCustomNote(t[e])
                    };
                    t(), Topics.get(Topics.REFRESH_DATA).subscribe(t), a.inputFields.notetype && (a.noteTypeIconContainer.bind("mousedown", function(t) {
                        a.inputFields.notetype.toggle(t), t.preventDefault(), a.inputFields.notetype.focus()
                    }), a.inputFields.notetype.getElement().bind("focus", function() {
                        a.noteTypeIconContainer.addClass("focus")
                    }), a.inputFields.notetype.getElement().bind("blur", function() {
                        a.noteTypeIconContainer.removeClass("focus")
                    }), a.inputFields.notetype.onChange(a.setFields));
                    var e = a.addFavButton(),
                        n = LPTools.createElement("a", {
                            class: "itemButton history",
                            title: Strings.translateString("Note History")
                        });
                    $(n).bind("click", function() {
                        LPRequest.makeRequest(LPProxy.getNoteHistory, {
                            params: {
                                aid: a.vaultItem.getID(),
                                shareId: a.vaultItem.getShareID()
                            },
                            success: function(t) {
                                dialogs.fieldHistory.open({
                                    history: t,
                                    vaultItem: a.vaultItem,
                                    historyType: Constants.HISTORY_TYPES.NOTE
                                })
                            },
                            requestSuccessOptions: {
                                closeDialog: !1
                            }
                        })
                    }), e.appendChild(n), Topics.get(Topics.ATTACHMENT_REMOVED).subscribe(function(t) {
                        for (var e = 0, n = a.addedAttachments.length; e < n; ++e)
                            if (a.addedAttachments[e] === t) return void a.addedAttachments.splice(e, 1);
                        a.removedAttachments.push(t)
                    }), $("#addAttachmentButton").bind("click", function() {
                        LPProxy.addAttachment(function(t) {
                            a.addAttachment(t)
                        })
                    }), $("#deleteCustomNoteTemplate").bind("click", function() {
                        dialogs.confirmation.open({
                            title: Strings.translateString("Confirm Deletion"),
                            text: Strings.translateString("Are you sure you want do delete? Any notes you created using this template will not be deleted."),
                            nextButtonText: Strings.translateString("Continue"),
                            backButtonText: Strings.Vault.CANCEL,
                            handler: function() {
                                var t = a.inputFields.notetype.getValue(),
                                    e = JSON.parse(a.noteForms[t].customTemplate);
                                LPRequest.makeRequest(LPProxy.deleteCustomNoteTemplate, {
                                    params: {
                                        id: e.id
                                    },
                                    success: function() {
                                        a.inputFields.notetype.removeValue(t, Note.prototype.NOTE_TYPES.GENERIC), delete a.noteForms[t]
                                    },
                                    requestSuccessOptions: {
                                        closeDialog: !1
                                    }
                                })
                            }
                        })
                    }), Topics.get(Topics.SECURENOTE_TEMPLATE_ADDED).subscribe(function(t) {
                        var e = a.addCustomNote(t);
                        a.inputFields.notetype.setValue(e)
                    })
                }(this), this.noteForms[Note.prototype.NOTE_TYPES.BANK] = new I([new DialogInput.LabelledInput("Bank Name", new DialogInput.TextInput), new DialogInput.LabelledInput("Account Type", new DialogInput.TextInput), new DialogInput.LabelledInput("Routing Number", new DialogInput.TextInput), new DialogInput.LabelledInput("Account Number", new DialogInput.TextInput), new DialogInput.LabelledInput("SWIFT Code", new DialogInput.TextInput), new DialogInput.LabelledInput("IBAN Number", new DialogInput.TextInput), new DialogInput.LabelledInput("Pin", new DialogInput.TextInput), new DialogInput.LabelledInput("Branch Address", new DialogInput.TextInput), new DialogInput.LabelledInput("Branch Phone", new DialogInput.TextInput), new DialogInput.LabelledInput("Notes", new DialogInput.TextArea, {
                    topAlign: !0
                })]), this.noteForms[Note.prototype.NOTE_TYPES.DATABASE] = new I([new DialogInput.LabelledInput("Type", new DialogInput.TextInput), new DialogInput.LabelledInput("Hostname", new DialogInput.TextInput), new DialogInput.LabelledInput("Port", new DialogInput.TextInput), new DialogInput.LabelledInput("Database", new DialogInput.TextInput), new DialogInput.LabelledInput("Username", new DialogInput.TextInput), new DialogInput.LabelledInput("Password", new DialogInput.PasswordInput), new DialogInput.LabelledInput("SID", new DialogInput.TextInput), new DialogInput.LabelledInput("Alias", new DialogInput.TextInput), new DialogInput.LabelledInput("Notes", new DialogInput.TextArea, {
                    topAlign: !0
                })]), this.noteForms[Note.prototype.NOTE_TYPES.DRIVERS_LICENSE] = new I([new DialogInput.LabelledInput("Number", new DialogInput.TextInput), new DialogInput.LabelledInput("Expiration Date", new DialogInput.AlphaDateInput), new DialogInput.LabelledInput("License Class", new DialogInput.TextInput), new DialogInput.LabelledInput("Name", new DialogInput.TextInput), new DialogInput.LabelledInput("Address", new DialogInput.TextInput), new DialogInput.LabelledInput("City / Town", new DialogInput.TextInput), new DialogInput.LabelledInput("State", new DialogInput.TextInput), new DialogInput.LabelledInput("ZIP / Postal Code", new DialogInput.TextInput), new DialogInput.LabelledInput("Country", new DialogInput.TextInput), new DialogInput.LabelledInput("Date of Birth", new DialogInput.AlphaDateInput), new DialogInput.LabelledInput("Sex", new DialogInput.TextInput), new DialogInput.LabelledInput("Height", new DialogInput.TextInput), new DialogInput.LabelledInput("Notes", new DialogInput.TextArea, {
                    topAlign: !0
                })]), this.noteForms[Note.prototype.NOTE_TYPES.EMAIL] = new I([new DialogInput.LabelledInput("Username", new DialogInput.TextInput), new DialogInput.LabelledInput("Password", new DialogInput.PasswordInput), new DialogInput.LabelledInput("Server", new DialogInput.TextInput), new DialogInput.LabelledInput("Port", new DialogInput.TextInput), new DialogInput.LabelledInput("Type", new DialogInput.TextInput), new DialogInput.LabelledInput("SMTP Server", new DialogInput.TextInput), new DialogInput.LabelledInput("SMTP Port", new DialogInput.TextInput), new DialogInput.LabelledInput("Notes", new DialogInput.TextArea, {
                    topAlign: !0
                })]), this.noteForms[Note.prototype.NOTE_TYPES.HEALTH_INSURANCE] = new I([new DialogInput.LabelledInput("Company", new DialogInput.TextInput), new DialogInput.LabelledInput("Company Phone", new DialogInput.TextInput), new DialogInput.LabelledInput("Policy Type", new DialogInput.TextInput), new DialogInput.LabelledInput("Policy Number", new DialogInput.TextInput), new DialogInput.LabelledInput("Group ID", new DialogInput.TextInput), new DialogInput.LabelledInput("Member Name", new DialogInput.TextInput), new DialogInput.LabelledInput("Member ID", new DialogInput.TextInput), new DialogInput.LabelledInput("Physician Name", new DialogInput.TextInput), new DialogInput.LabelledInput("Physician Phone", new DialogInput.TextInput), new DialogInput.LabelledInput("Physician Address", new DialogInput.TextInput), new DialogInput.LabelledInput("Co-pay", new DialogInput.TextInput), new DialogInput.LabelledInput("Notes", new DialogInput.TextArea, {
                    topAlign: !0
                })]), this.noteForms[Note.prototype.NOTE_TYPES.IM] = new I([new DialogInput.LabelledInput("Type", new DialogInput.TextInput), new DialogInput.LabelledInput("Username", new DialogInput.TextInput), new DialogInput.LabelledInput("Password", new DialogInput.PasswordInput), new DialogInput.LabelledInput("Server", new DialogInput.TextInput), new DialogInput.LabelledInput("Port", new DialogInput.TextInput), new DialogInput.LabelledInput("Notes", new DialogInput.TextArea, {
                    topAlign: !0
                })]), this.noteForms[Note.prototype.NOTE_TYPES.INSURANCE] = new I([new DialogInput.LabelledInput("Company", new DialogInput.TextInput), new DialogInput.LabelledInput("Policy Type", new DialogInput.TextInput), new DialogInput.LabelledInput("Policy Number", new DialogInput.TextInput), new DialogInput.LabelledInput("Expiration", new DialogInput.AlphaDateInput), new DialogInput.LabelledInput("Agent Name", new DialogInput.TextInput), new DialogInput.LabelledInput("Agent Phone", new DialogInput.TextInput), new DialogInput.LabelledInput("URL", new DialogInput.TextInput), new DialogInput.LabelledInput("Notes", new DialogInput.TextArea, {
                    topAlign: !0
                })]), this.noteForms[Note.prototype.NOTE_TYPES.MEMBERSHIP] = new I([new DialogInput.LabelledInput("Organization", new DialogInput.TextInput), new DialogInput.LabelledInput("Membership Number", new DialogInput.TextInput), new DialogInput.LabelledInput("Member Name", new DialogInput.TextInput), new DialogInput.LabelledInput("Start Date", new DialogInput.AlphaDateInput), new DialogInput.LabelledInput("Expiration Date", new DialogInput.AlphaDateInput), new DialogInput.LabelledInput("Website", new DialogInput.TextInput), new DialogInput.LabelledInput("Telephone", new DialogInput.TextInput), new DialogInput.LabelledInput("Password", new DialogInput.PasswordInput), new DialogInput.LabelledInput("Notes", new DialogInput.TextArea, {
                    topAlign: !0
                })]), this.noteForms[Note.prototype.NOTE_TYPES.CREDIT] = new I([new DialogInput.LabelledInput("Name on Card", new DialogInput.TextInput), new DialogInput.LabelledInput("Type", new DialogInput.TextInput), new DialogInput.LabelledInput("Number", new DialogInput.TextInput), new DialogInput.LabelledInput("Security Code", new DialogInput.TextInput), new DialogInput.LabelledInput("Start Date", new DialogInput.AlphaDateInput({
                    includeDay: !1
                })), new DialogInput.LabelledInput("Expiration Date", new DialogInput.AlphaDateInput({
                    includeDay: !1
                })), new DialogInput.LabelledInput("Notes", new DialogInput.TextArea, {
                    topAlign: !0
                })]), this.noteForms[Note.prototype.NOTE_TYPES.SSN] = new I([new DialogInput.LabelledInput("Name", new DialogInput.TextInput), new DialogInput.LabelledInput("Number", new DialogInput.TextInput), new DialogInput.LabelledInput("Notes", new DialogInput.TextArea, {
                    topAlign: !0
                })]), this.noteForms[Note.prototype.NOTE_TYPES.SOFTWARE_LICENSE] = new I([new DialogInput.LabelledInput("License Key", new DialogInput.TextInput), new DialogInput.LabelledInput("Licensee", new DialogInput.TextInput), new DialogInput.LabelledInput("Version", new DialogInput.TextInput), new DialogInput.LabelledInput("Publisher", new DialogInput.TextInput), new DialogInput.LabelledInput("Support Email", new DialogInput.TextInput), new DialogInput.LabelledInput("Website", new DialogInput.TextInput), new DialogInput.LabelledInput("Price", new DialogInput.TextInput), new DialogInput.LabelledInput("Purchase Date", new DialogInput.AlphaDateInput), new DialogInput.LabelledInput("Order Number", new DialogInput.TextInput), new DialogInput.LabelledInput("Number of Licenses", new DialogInput.TextInput), new DialogInput.LabelledInput("Order Total", new DialogInput.TextInput), new DialogInput.LabelledInput("Notes", new DialogInput.TextArea, {
                    topAlign: !0
                })]), this.noteForms[Note.prototype.NOTE_TYPES.SSH_KEY] = new I([new DialogInput.LabelledInput("Bit Strength", new DialogInput.TextInput), new DialogInput.LabelledInput("Format", new DialogInput.TextInput), new DialogInput.LabelledInput("Passphrase", new DialogInput.TextInput), new DialogInput.LabelledInput("Private Key", new DialogInput.TextArea("noResize", {
                    inputButton: Strings.translateString("Copy"),
                    inputButtonHandler: function() {
                        this.dialog.vaultItem.copyPrivateKey(this.dialog.inputFields)
                    }
                })), new DialogInput.LabelledInput("Public Key", new DialogInput.TextInput), new DialogInput.LabelledInput("Hostname", new DialogInput.TextInput), new DialogInput.LabelledInput("Date", new DialogInput.AlphaDateInput), new DialogInput.LabelledInput("Notes", new DialogInput.TextArea, {
                    topAlign: !0
                })]), this.noteForms[Note.prototype.NOTE_TYPES.WIFI] = new I([new DialogInput.LabelledInput("SSID", new DialogInput.TextInput), new DialogInput.LabelledInput("Password", new DialogInput.PasswordInput), new DialogInput.LabelledInput("Connection Type", new DialogInput.TextInput), new DialogInput.LabelledInput("Connection Mode", new DialogInput.TextInput), new DialogInput.LabelledInput("Authentication", new DialogInput.TextInput), new DialogInput.LabelledInput("Encryption", new DialogInput.TextInput), new DialogInput.LabelledInput("Use 802.1X", new DialogInput.TextInput), new DialogInput.LabelledInput("FIPS Mode", new DialogInput.TextInput), new DialogInput.LabelledInput("Key Type", new DialogInput.TextInput), new DialogInput.LabelledInput("Protected", new DialogInput.TextInput), new DialogInput.LabelledInput("Key Index", new DialogInput.TextInput), new DialogInput.LabelledInput("Notes", new DialogInput.TextArea, {
                    topAlign: !0
                })]), this.noteForms[Note.prototype.NOTE_TYPES.SERVER] = new I([new DialogInput.LabelledInput("Hostname", new DialogInput.TextInput), new DialogInput.LabelledInput("Username", new DialogInput.TextInput), new DialogInput.LabelledInput("Password", new DialogInput.PasswordInput), new DialogInput.LabelledInput("Notes", new DialogInput.TextArea, {
                    topAlign: !0
                })]), this.noteForms[Note.prototype.NOTE_TYPES.PASSPORT] = new I([new DialogInput.LabelledInput("Type", new DialogInput.TextInput), new DialogInput.LabelledInput("Name", new DialogInput.TextInput), new DialogInput.LabelledInput("Country", new DialogInput.TextInput), new DialogInput.LabelledInput("Number", new DialogInput.TextInput), new DialogInput.LabelledInput("Sex", new DialogInput.TextInput), new DialogInput.LabelledInput("Nationality", new DialogInput.TextInput), new DialogInput.LabelledInput("Issuing Authority", new DialogInput.TextInput), new DialogInput.LabelledInput("Date of Birth", new DialogInput.AlphaDateInput), new DialogInput.LabelledInput("Issued Date", new DialogInput.AlphaDateInput), new DialogInput.LabelledInput("Expiration Date", new DialogInput.AlphaDateInput), new DialogInput.LabelledInput("Notes", new DialogInput.TextArea, {
                    topAlign: !0
                })]), this.noteForms[Note.prototype.NOTE_TYPES.GENERIC] = new I([new DialogInput.LabelledInput("Notes", new DialogInput.TextArea, {
                    label: null
                })], ["noteContent"]), this.noteForms[Note.prototype.NOTE_TYPES.ADDRESS] = new I([new DialogInput.LabelledInput("Title", new DialogInput.SelectInput([{
                    value: "mr",
                    label: "Mr"
                }, {
                    value: "mrs",
                    label: "Mrs"
                }, {
                    value: "ms",
                    label: "Ms"
                }, {
                    value: "dr",
                    label: "Dr"
                }])), new DialogInput.LabelledInput("First Name", new DialogInput.TextInput), new DialogInput.LabelledInput("Middle Name", new DialogInput.TextInput), new DialogInput.LabelledInput("Last Name", new DialogInput.TextInput), new DialogInput.LabelledInput("Username", new DialogInput.TextInput), new DialogInput.LabelledInput("Gender", new DialogInput.SelectInput([{
                    value: "m",
                    label: "Male"
                }, {
                    value: "f",
                    label: "Female"
                }, {
                    value: "o",
                    label: "Other"
                }])), new DialogInput.LabelledInput("Birthday", new DialogInput.AlphaDateInput), new DialogInput.LabelledInput("Company", new DialogInput.TextInput), new DialogInput.LabelledInput("Address 1", new DialogInput.TextInput), new DialogInput.LabelledInput("Address 2", new DialogInput.TextInput), new DialogInput.LabelledInput("Address 3", new DialogInput.TextInput), new DialogInput.LabelledInput("City / Town", new DialogInput.TextInput), new DialogInput.LabelledInput("County", new DialogInput.TextInput), new DialogInput.LabelledInput("State", new StateDropdown), new DialogInput.LabelledInput("Zip / Postal Code", new DialogInput.TextInput), new DialogInput.LabelledInput("Country", new DialogInput.CountryInput), new DialogInput.LabelledInput("Timezone", new DialogInput.TimezoneInput), new DialogInput.LabelledInput("Email Address", new DialogInput.TextInput), new DialogInput.LabelledInput("Phone", new PhoneInput), new DialogInput.LabelledInput("Evening Phone", new PhoneInput), new DialogInput.LabelledInput("Mobile Phone", new PhoneInput), new DialogInput.LabelledInput("Fax", new PhoneInput), new DialogInput.LabelledInput("Notes", new DialogInput.TextArea, {
                    topAlign: !0
                })])
        }, NoteDialog.prototype.addAttachment = function(t) {
            if (t) {
                this.addedAttachments.push(t);
                var e = t.newDisplayObject();
                this.containers.attachments ? this.containers.attachments.addChild(e) : this.initializeAttachmentContainer([e])
            }
        }, NoteDialog.prototype.setNoteFields = function(t) {
            t = t || Note.prototype.NOTE_TYPES.GENERIC, LPTools.removeDOMChildren(this.noteFormElement);
            var e = this.noteForms[t];
            if (e) {
                var n = !1;
                null === e.element && (e.initialize(this), n = !0), this.noteFormElement.appendChild(e.element), this.noteFormElement.scrollTop = 0, this.inputFields.extra = e.inputs, n && this.adjustedView && e.inputs.adjustView(), this.setNoteTypeImage(t)
            }
        }, NoteDialog.prototype.add = function(t) {
            var e;
            (new Note).addFromDialog(t, this.getGroup(t), this.data.saveOptions)
        };
        var i = function(t, e) {
                if (t) {
                    for (var n = [], a = 0, o = t.length; a < o; ++a) n.push(t[a]._data);
                    0 < n.length && (e.add = n)
                }
            },
            u = function(t, e) {
                if (t) {
                    for (var n = [], a = 0, o = t.length; a < o; ++a) n.push(t[a].getID());
                    0 < n.length && (e.remove = n)
                }
            };
        NoteDialog.prototype.getData = function() {
            var t = DialogWithGroupInput.prototype.getData.apply(this, arguments);
            return (this.removedAttachments && 0 < this.removedAttachments.length || this.addedAttachments && 0 < this.addedAttachments.length) && (t.attacharraychanges = {}, i(this.addedAttachments, t.attacharraychanges), u(this.removedAttachments, t.attacharraychanges)), t
        }, NoteDialog.prototype.close = function(t) {
            if (Dialog.prototype.close.apply(this, arguments) && this.inputFields.notetype && this.temporaryNoteTypeOptionValue) {
                var e = this.temporaryNoteTypeOptionValue;
                this.inputFields.notetype.removeValue(this.temporaryNoteTypeOptionValue, Note.prototype.NOTE_TYPES.GENERIC), this.noteTypeOptions = this.noteTypeOptions.filter(function(t) {
                    return t.value !== e
                }), delete this.noteForms[e], this.temporaryNoteTypeOptionValue = null
            }
        };
        var I = function(t, e) {
            if (this.inputs = new DialogInput.NestedFields, this.inputsArray = [], t instanceof Array)
                for (var n = 0, a = (this.inputsArray = t).length; n < a; ++n) {
                    var o = t[n];
                    this.inputs[o.field] = o
                }
            this.element = null, this.$_element = null, this.additionalClasses = e
        };
        I.prototype.initialize = function(t) {
            var e = ["settings"];
            this.additionalClasses && (e = e.concat(this.additionalClasses)), this.element = LPTools.createElement("table", e), this.$_element = $(this.element);
            for (var n = LPTools.createElement("tbody"), a = 0, o = this.inputsArray.length; a < o; ++a) {
                var l = this.inputsArray[a],
                    p = l.build();
                p.setAttribute("class", "settingsRow"), n.appendChild(p), l.dialog = t
            }
            LPTools.addZebraStriping(n), this.element.appendChild(n), Strings.translate(this.element)
        }
    }(document);
//# sourceMappingURL=sourcemaps/noteDialog.js.map