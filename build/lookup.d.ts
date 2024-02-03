declare const _default: {
    /**
     * Lookup3: frame_system::AccountInfo<Index, pallet_balances::types::AccountData<Balance>>
     **/
    FrameSystemAccountInfo: {
        nonce: string;
        consumers: string;
        providers: string;
        sufficients: string;
        data: string;
    };
    /**
     * Lookup5: pallet_balances::types::AccountData<Balance>
     **/
    PalletBalancesAccountData: {
        free: string;
        reserved: string;
        frozen: string;
        flags: string;
    };
    /**
     * Lookup8: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
     **/
    FrameSupportDispatchPerDispatchClassWeight: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup9: sp_weights::weight_v2::Weight
     **/
    SpWeightsWeightV2Weight: {
        refTime: string;
        proofSize: string;
    };
    /**
     * Lookup14: sp_runtime::generic::digest::Digest
     **/
    SpRuntimeDigest: {
        logs: string;
    };
    /**
     * Lookup16: sp_runtime::generic::digest::DigestItem
     **/
    SpRuntimeDigestDigestItem: {
        _enum: {
            Other: string;
            __Unused1: string;
            __Unused2: string;
            __Unused3: string;
            Consensus: string;
            Seal: string;
            PreRuntime: string;
            __Unused7: string;
            RuntimeEnvironmentUpdated: string;
        };
    };
    /**
     * Lookup19: frame_system::EventRecord<shibuya_runtime::RuntimeEvent, primitive_types::H256>
     **/
    FrameSystemEventRecord: {
        phase: string;
        event: string;
        topics: string;
    };
    /**
     * Lookup21: frame_system::pallet::Event<T>
     **/
    FrameSystemEvent: {
        _enum: {
            ExtrinsicSuccess: {
                dispatchInfo: string;
            };
            ExtrinsicFailed: {
                dispatchError: string;
                dispatchInfo: string;
            };
            CodeUpdated: string;
            NewAccount: {
                account: string;
            };
            KilledAccount: {
                account: string;
            };
            Remarked: {
                _alias: {
                    hash_: string;
                };
                sender: string;
                hash_: string;
            };
        };
    };
    /**
     * Lookup22: frame_support::dispatch::DispatchInfo
     **/
    FrameSupportDispatchDispatchInfo: {
        weight: string;
        class: string;
        paysFee: string;
    };
    /**
     * Lookup23: frame_support::dispatch::DispatchClass
     **/
    FrameSupportDispatchDispatchClass: {
        _enum: string[];
    };
    /**
     * Lookup24: frame_support::dispatch::Pays
     **/
    FrameSupportDispatchPays: {
        _enum: string[];
    };
    /**
     * Lookup25: sp_runtime::DispatchError
     **/
    SpRuntimeDispatchError: {
        _enum: {
            Other: string;
            CannotLookup: string;
            BadOrigin: string;
            Module: string;
            ConsumerRemaining: string;
            NoProviders: string;
            TooManyConsumers: string;
            Token: string;
            Arithmetic: string;
            Transactional: string;
            Exhausted: string;
            Corruption: string;
            Unavailable: string;
            RootNotAllowed: string;
        };
    };
    /**
     * Lookup26: sp_runtime::ModuleError
     **/
    SpRuntimeModuleError: {
        index: string;
        error: string;
    };
    /**
     * Lookup27: sp_runtime::TokenError
     **/
    SpRuntimeTokenError: {
        _enum: string[];
    };
    /**
     * Lookup28: sp_arithmetic::ArithmeticError
     **/
    SpArithmeticArithmeticError: {
        _enum: string[];
    };
    /**
     * Lookup29: sp_runtime::TransactionalError
     **/
    SpRuntimeTransactionalError: {
        _enum: string[];
    };
    /**
     * Lookup30: pallet_utility::pallet::Event
     **/
    PalletUtilityEvent: {
        _enum: {
            BatchInterrupted: {
                index: string;
                error: string;
            };
            BatchCompleted: string;
            BatchCompletedWithErrors: string;
            ItemCompleted: string;
            ItemFailed: {
                error: string;
            };
            DispatchedAs: {
                result: string;
            };
        };
    };
    /**
     * Lookup33: pallet_identity::pallet::Event<T>
     **/
    PalletIdentityEvent: {
        _enum: {
            IdentitySet: {
                who: string;
            };
            IdentityCleared: {
                who: string;
                deposit: string;
            };
            IdentityKilled: {
                who: string;
                deposit: string;
            };
            JudgementRequested: {
                who: string;
                registrarIndex: string;
            };
            JudgementUnrequested: {
                who: string;
                registrarIndex: string;
            };
            JudgementGiven: {
                target: string;
                registrarIndex: string;
            };
            RegistrarAdded: {
                registrarIndex: string;
            };
            SubIdentityAdded: {
                sub: string;
                main: string;
                deposit: string;
            };
            SubIdentityRemoved: {
                sub: string;
                main: string;
                deposit: string;
            };
            SubIdentityRevoked: {
                sub: string;
                main: string;
                deposit: string;
            };
        };
    };
    /**
     * Lookup34: pallet_multisig::pallet::Event<T>
     **/
    PalletMultisigEvent: {
        _enum: {
            NewMultisig: {
                approving: string;
                multisig: string;
                callHash: string;
            };
            MultisigApproval: {
                approving: string;
                timepoint: string;
                multisig: string;
                callHash: string;
            };
            MultisigExecuted: {
                approving: string;
                timepoint: string;
                multisig: string;
                callHash: string;
                result: string;
            };
            MultisigCancelled: {
                cancelling: string;
                timepoint: string;
                multisig: string;
                callHash: string;
            };
        };
    };
    /**
     * Lookup35: pallet_multisig::Timepoint<BlockNumber>
     **/
    PalletMultisigTimepoint: {
        height: string;
        index: string;
    };
    /**
     * Lookup36: pallet_scheduler::pallet::Event<T>
     **/
    PalletSchedulerEvent: {
        _enum: {
            Scheduled: {
                when: string;
                index: string;
            };
            Canceled: {
                when: string;
                index: string;
            };
            Dispatched: {
                task: string;
                id: string;
                result: string;
            };
            CallUnavailable: {
                task: string;
                id: string;
            };
            PeriodicFailed: {
                task: string;
                id: string;
            };
            PermanentlyOverweight: {
                task: string;
                id: string;
            };
        };
    };
    /**
     * Lookup39: pallet_proxy::pallet::Event<T>
     **/
    PalletProxyEvent: {
        _enum: {
            ProxyExecuted: {
                result: string;
            };
            PureCreated: {
                pure: string;
                who: string;
                proxyType: string;
                disambiguationIndex: string;
            };
            Announced: {
                real: string;
                proxy: string;
                callHash: string;
            };
            ProxyAdded: {
                delegator: string;
                delegatee: string;
                proxyType: string;
                delay: string;
            };
            ProxyRemoved: {
                delegator: string;
                delegatee: string;
                proxyType: string;
                delay: string;
            };
        };
    };
    /**
     * Lookup40: shibuya_runtime::ProxyType
     **/
    ShibuyaRuntimeProxyType: {
        _enum: string[];
    };
    /**
     * Lookup42: cumulus_pallet_parachain_system::pallet::Event<T>
     **/
    CumulusPalletParachainSystemEvent: {
        _enum: {
            ValidationFunctionStored: string;
            ValidationFunctionApplied: {
                relayChainBlockNum: string;
            };
            ValidationFunctionDiscarded: string;
            UpgradeAuthorized: {
                codeHash: string;
            };
            DownwardMessagesReceived: {
                count: string;
            };
            DownwardMessagesProcessed: {
                weightUsed: string;
                dmqHead: string;
            };
            UpwardMessageSent: {
                messageHash: string;
            };
        };
    };
    /**
     * Lookup43: pallet_transaction_payment::pallet::Event<T>
     **/
    PalletTransactionPaymentEvent: {
        _enum: {
            TransactionFeePaid: {
                who: string;
                actualFee: string;
                tip: string;
            };
        };
    };
    /**
     * Lookup44: pallet_balances::pallet::Event<T, I>
     **/
    PalletBalancesEvent: {
        _enum: {
            Endowed: {
                account: string;
                freeBalance: string;
            };
            DustLost: {
                account: string;
                amount: string;
            };
            Transfer: {
                from: string;
                to: string;
                amount: string;
            };
            BalanceSet: {
                who: string;
                free: string;
            };
            Reserved: {
                who: string;
                amount: string;
            };
            Unreserved: {
                who: string;
                amount: string;
            };
            ReserveRepatriated: {
                from: string;
                to: string;
                amount: string;
                destinationStatus: string;
            };
            Deposit: {
                who: string;
                amount: string;
            };
            Withdraw: {
                who: string;
                amount: string;
            };
            Slashed: {
                who: string;
                amount: string;
            };
            Minted: {
                who: string;
                amount: string;
            };
            Burned: {
                who: string;
                amount: string;
            };
            Suspended: {
                who: string;
                amount: string;
            };
            Restored: {
                who: string;
                amount: string;
            };
            Upgraded: {
                who: string;
            };
            Issued: {
                amount: string;
            };
            Rescinded: {
                amount: string;
            };
            Locked: {
                who: string;
                amount: string;
            };
            Unlocked: {
                who: string;
                amount: string;
            };
            Frozen: {
                who: string;
                amount: string;
            };
            Thawed: {
                who: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup45: frame_support::traits::tokens::misc::BalanceStatus
     **/
    FrameSupportTokensMiscBalanceStatus: {
        _enum: string[];
    };
    /**
     * Lookup46: pallet_vesting::pallet::Event<T>
     **/
    PalletVestingEvent: {
        _enum: {
            VestingUpdated: {
                account: string;
                unvested: string;
            };
            VestingCompleted: {
                account: string;
            };
        };
    };
    /**
     * Lookup47: pallet_dapp_staking_v3::pallet::Event<T>
     **/
    PalletDappStakingV3Event: {
        _enum: {
            MaintenanceMode: {
                enabled: string;
            };
            NewEra: {
                era: string;
            };
            NewSubperiod: {
                subperiod: string;
                number: string;
            };
            DAppRegistered: {
                owner: string;
                smartContract: string;
                dappId: string;
            };
            DAppRewardDestinationUpdated: {
                smartContract: string;
                beneficiary: string;
            };
            DAppOwnerChanged: {
                smartContract: string;
                newOwner: string;
            };
            DAppUnregistered: {
                smartContract: string;
                era: string;
            };
            Locked: {
                account: string;
                amount: string;
            };
            Unlocking: {
                account: string;
                amount: string;
            };
            ClaimedUnlocked: {
                account: string;
                amount: string;
            };
            Relock: {
                account: string;
                amount: string;
            };
            Stake: {
                account: string;
                smartContract: string;
                amount: string;
            };
            Unstake: {
                account: string;
                smartContract: string;
                amount: string;
            };
            Reward: {
                account: string;
                era: string;
                amount: string;
            };
            BonusReward: {
                account: string;
                smartContract: string;
                period: string;
                amount: string;
            };
            DAppReward: {
                beneficiary: string;
                smartContract: string;
                tierId: string;
                era: string;
                amount: string;
            };
            UnstakeFromUnregistered: {
                account: string;
                smartContract: string;
                amount: string;
            };
            ExpiredEntriesRemoved: {
                account: string;
                count: string;
            };
            Force: {
                forcingType: string;
            };
        };
    };
    /**
     * Lookup49: pallet_dapp_staking_v3::types::Subperiod
     **/
    PalletDappStakingV3Subperiod: {
        _enum: string[];
    };
    /**
     * Lookup50: astar_primitives::dapp_staking::SmartContract<sp_core::crypto::AccountId32>
     **/
    AstarPrimitivesDappStakingSmartContract: {
        _enum: {
            Evm: string;
            Wasm: string;
        };
    };
    /**
     * Lookup54: pallet_dapp_staking_v3::types::ForcingType
     **/
    PalletDappStakingV3ForcingType: {
        _enum: string[];
    };
    /**
     * Lookup55: pallet_inflation::pallet::Event<T>
     **/
    PalletInflationEvent: {
        _enum: {
            InflationParametersForceChanged: string;
            InflationConfigurationForceChanged: {
                config: string;
            };
            ForcedInflationRecalculation: {
                config: string;
            };
            NewInflationConfiguration: {
                config: string;
            };
        };
    };
    /**
     * Lookup56: pallet_inflation::InflationConfiguration
     **/
    PalletInflationInflationConfiguration: {
        recalculationEra: string;
        issuanceSafetyCap: string;
        collatorRewardPerBlock: string;
        treasuryRewardPerBlock: string;
        dappRewardPoolPerEra: string;
        baseStakerRewardPoolPerEra: string;
        adjustableStakerRewardPoolPerEra: string;
        bonusRewardPoolPerPeriod: string;
        idealStakingRate: string;
    };
    /**
     * Lookup61: pallet_assets::pallet::Event<T, I>
     **/
    PalletAssetsEvent: {
        _enum: {
            Created: {
                assetId: string;
                creator: string;
                owner: string;
            };
            Issued: {
                assetId: string;
                owner: string;
                amount: string;
            };
            Transferred: {
                assetId: string;
                from: string;
                to: string;
                amount: string;
            };
            Burned: {
                assetId: string;
                owner: string;
                balance: string;
            };
            TeamChanged: {
                assetId: string;
                issuer: string;
                admin: string;
                freezer: string;
            };
            OwnerChanged: {
                assetId: string;
                owner: string;
            };
            Frozen: {
                assetId: string;
                who: string;
            };
            Thawed: {
                assetId: string;
                who: string;
            };
            AssetFrozen: {
                assetId: string;
            };
            AssetThawed: {
                assetId: string;
            };
            AccountsDestroyed: {
                assetId: string;
                accountsDestroyed: string;
                accountsRemaining: string;
            };
            ApprovalsDestroyed: {
                assetId: string;
                approvalsDestroyed: string;
                approvalsRemaining: string;
            };
            DestructionStarted: {
                assetId: string;
            };
            Destroyed: {
                assetId: string;
            };
            ForceCreated: {
                assetId: string;
                owner: string;
            };
            MetadataSet: {
                assetId: string;
                name: string;
                symbol: string;
                decimals: string;
                isFrozen: string;
            };
            MetadataCleared: {
                assetId: string;
            };
            ApprovedTransfer: {
                assetId: string;
                source: string;
                delegate: string;
                amount: string;
            };
            ApprovalCancelled: {
                assetId: string;
                owner: string;
                delegate: string;
            };
            TransferredApproved: {
                assetId: string;
                owner: string;
                delegate: string;
                destination: string;
                amount: string;
            };
            AssetStatusChanged: {
                assetId: string;
            };
            AssetMinBalanceChanged: {
                assetId: string;
                newMinBalance: string;
            };
            Touched: {
                assetId: string;
                who: string;
                depositor: string;
            };
            Blocked: {
                assetId: string;
                who: string;
            };
        };
    };
    /**
     * Lookup62: pallet_collator_selection::pallet::Event<T>
     **/
    PalletCollatorSelectionEvent: {
        _enum: {
            NewInvulnerables: string;
            NewDesiredCandidates: string;
            NewCandidacyBond: string;
            CandidateAdded: string;
            CandidateRemoved: string;
            CandidateSlashed: string;
        };
    };
    /**
     * Lookup64: pallet_session::pallet::Event
     **/
    PalletSessionEvent: {
        _enum: {
            NewSession: {
                sessionIndex: string;
            };
        };
    };
    /**
     * Lookup65: cumulus_pallet_xcmp_queue::pallet::Event<T>
     **/
    CumulusPalletXcmpQueueEvent: {
        _enum: {
            Success: {
                messageHash: string;
                weight: string;
            };
            Fail: {
                messageHash: string;
                error: string;
                weight: string;
            };
            BadVersion: {
                messageHash: string;
            };
            BadFormat: {
                messageHash: string;
            };
            XcmpMessageSent: {
                messageHash: string;
            };
            OverweightEnqueued: {
                sender: string;
                sentAt: string;
                index: string;
                required: string;
            };
            OverweightServiced: {
                index: string;
                used: string;
            };
        };
    };
    /**
     * Lookup66: xcm::v3::traits::Error
     **/
    XcmV3TraitsError: {
        _enum: {
            Overflow: string;
            Unimplemented: string;
            UntrustedReserveLocation: string;
            UntrustedTeleportLocation: string;
            LocationFull: string;
            LocationNotInvertible: string;
            BadOrigin: string;
            InvalidLocation: string;
            AssetNotFound: string;
            FailedToTransactAsset: string;
            NotWithdrawable: string;
            LocationCannotHold: string;
            ExceedsMaxMessageSize: string;
            DestinationUnsupported: string;
            Transport: string;
            Unroutable: string;
            UnknownClaim: string;
            FailedToDecode: string;
            MaxWeightInvalid: string;
            NotHoldingFees: string;
            TooExpensive: string;
            Trap: string;
            ExpectationFalse: string;
            PalletNotFound: string;
            NameMismatch: string;
            VersionIncompatible: string;
            HoldingWouldOverflow: string;
            ExportError: string;
            ReanchorFailed: string;
            NoDeal: string;
            FeesNotMet: string;
            LockError: string;
            NoPermission: string;
            Unanchored: string;
            NotDepositable: string;
            UnhandledXcmVersion: string;
            WeightLimitReached: string;
            Barrier: string;
            WeightNotComputable: string;
            ExceedsStackLimit: string;
        };
    };
    /**
     * Lookup68: pallet_xcm::pallet::Event<T>
     **/
    PalletXcmEvent: {
        _enum: {
            Attempted: string;
            Sent: string;
            UnexpectedResponse: string;
            ResponseReady: string;
            Notified: string;
            NotifyOverweight: string;
            NotifyDispatchError: string;
            NotifyDecodeFailed: string;
            InvalidResponder: string;
            InvalidResponderVersion: string;
            ResponseTaken: string;
            AssetsTrapped: string;
            VersionChangeNotified: string;
            SupportedVersionChanged: string;
            NotifyTargetSendFail: string;
            NotifyTargetMigrationFail: string;
            InvalidQuerierVersion: string;
            InvalidQuerier: string;
            VersionNotifyStarted: string;
            VersionNotifyRequested: string;
            VersionNotifyUnrequested: string;
            FeesPaid: string;
            AssetsClaimed: string;
        };
    };
    /**
     * Lookup69: xcm::v3::traits::Outcome
     **/
    XcmV3TraitsOutcome: {
        _enum: {
            Complete: string;
            Incomplete: string;
            Error: string;
        };
    };
    /**
     * Lookup70: xcm::v3::multilocation::MultiLocation
     **/
    XcmV3MultiLocation: {
        parents: string;
        interior: string;
    };
    /**
     * Lookup71: xcm::v3::junctions::Junctions
     **/
    XcmV3Junctions: {
        _enum: {
            Here: string;
            X1: string;
            X2: string;
            X3: string;
            X4: string;
            X5: string;
            X6: string;
            X7: string;
            X8: string;
        };
    };
    /**
     * Lookup72: xcm::v3::junction::Junction
     **/
    XcmV3Junction: {
        _enum: {
            Parachain: string;
            AccountId32: {
                network: string;
                id: string;
            };
            AccountIndex64: {
                network: string;
                index: string;
            };
            AccountKey20: {
                network: string;
                key: string;
            };
            PalletInstance: string;
            GeneralIndex: string;
            GeneralKey: {
                length: string;
                data: string;
            };
            OnlyChild: string;
            Plurality: {
                id: string;
                part: string;
            };
            GlobalConsensus: string;
        };
    };
    /**
     * Lookup74: xcm::v3::junction::NetworkId
     **/
    XcmV3JunctionNetworkId: {
        _enum: {
            ByGenesis: string;
            ByFork: {
                blockNumber: string;
                blockHash: string;
            };
            Polkadot: string;
            Kusama: string;
            Westend: string;
            Rococo: string;
            Wococo: string;
            Ethereum: {
                chainId: string;
            };
            BitcoinCore: string;
            BitcoinCash: string;
        };
    };
    /**
     * Lookup75: xcm::v3::junction::BodyId
     **/
    XcmV3JunctionBodyId: {
        _enum: {
            Unit: string;
            Moniker: string;
            Index: string;
            Executive: string;
            Technical: string;
            Legislative: string;
            Judicial: string;
            Defense: string;
            Administration: string;
            Treasury: string;
        };
    };
    /**
     * Lookup76: xcm::v3::junction::BodyPart
     **/
    XcmV3JunctionBodyPart: {
        _enum: {
            Voice: string;
            Members: {
                count: string;
            };
            Fraction: {
                nom: string;
                denom: string;
            };
            AtLeastProportion: {
                nom: string;
                denom: string;
            };
            MoreThanProportion: {
                nom: string;
                denom: string;
            };
        };
    };
    /**
     * Lookup77: xcm::v3::Xcm<Call>
     **/
    XcmV3Xcm: string;
    /**
     * Lookup79: xcm::v3::Instruction<Call>
     **/
    XcmV3Instruction: {
        _enum: {
            WithdrawAsset: string;
            ReserveAssetDeposited: string;
            ReceiveTeleportedAsset: string;
            QueryResponse: {
                queryId: string;
                response: string;
                maxWeight: string;
                querier: string;
            };
            TransferAsset: {
                assets: string;
                beneficiary: string;
            };
            TransferReserveAsset: {
                assets: string;
                dest: string;
                xcm: string;
            };
            Transact: {
                originKind: string;
                requireWeightAtMost: string;
                call: string;
            };
            HrmpNewChannelOpenRequest: {
                sender: string;
                maxMessageSize: string;
                maxCapacity: string;
            };
            HrmpChannelAccepted: {
                recipient: string;
            };
            HrmpChannelClosing: {
                initiator: string;
                sender: string;
                recipient: string;
            };
            ClearOrigin: string;
            DescendOrigin: string;
            ReportError: string;
            DepositAsset: {
                assets: string;
                beneficiary: string;
            };
            DepositReserveAsset: {
                assets: string;
                dest: string;
                xcm: string;
            };
            ExchangeAsset: {
                give: string;
                want: string;
                maximal: string;
            };
            InitiateReserveWithdraw: {
                assets: string;
                reserve: string;
                xcm: string;
            };
            InitiateTeleport: {
                assets: string;
                dest: string;
                xcm: string;
            };
            ReportHolding: {
                responseInfo: string;
                assets: string;
            };
            BuyExecution: {
                fees: string;
                weightLimit: string;
            };
            RefundSurplus: string;
            SetErrorHandler: string;
            SetAppendix: string;
            ClearError: string;
            ClaimAsset: {
                assets: string;
                ticket: string;
            };
            Trap: string;
            SubscribeVersion: {
                queryId: string;
                maxResponseWeight: string;
            };
            UnsubscribeVersion: string;
            BurnAsset: string;
            ExpectAsset: string;
            ExpectOrigin: string;
            ExpectError: string;
            ExpectTransactStatus: string;
            QueryPallet: {
                moduleName: string;
                responseInfo: string;
            };
            ExpectPallet: {
                index: string;
                name: string;
                moduleName: string;
                crateMajor: string;
                minCrateMinor: string;
            };
            ReportTransactStatus: string;
            ClearTransactStatus: string;
            UniversalOrigin: string;
            ExportMessage: {
                network: string;
                destination: string;
                xcm: string;
            };
            LockAsset: {
                asset: string;
                unlocker: string;
            };
            UnlockAsset: {
                asset: string;
                target: string;
            };
            NoteUnlockable: {
                asset: string;
                owner: string;
            };
            RequestUnlock: {
                asset: string;
                locker: string;
            };
            SetFeesMode: {
                jitWithdraw: string;
            };
            SetTopic: string;
            ClearTopic: string;
            AliasOrigin: string;
            UnpaidExecution: {
                weightLimit: string;
                checkOrigin: string;
            };
        };
    };
    /**
     * Lookup80: xcm::v3::multiasset::MultiAssets
     **/
    XcmV3MultiassetMultiAssets: string;
    /**
     * Lookup82: xcm::v3::multiasset::MultiAsset
     **/
    XcmV3MultiAsset: {
        id: string;
        fun: string;
    };
    /**
     * Lookup83: xcm::v3::multiasset::AssetId
     **/
    XcmV3MultiassetAssetId: {
        _enum: {
            Concrete: string;
            Abstract: string;
        };
    };
    /**
     * Lookup84: xcm::v3::multiasset::Fungibility
     **/
    XcmV3MultiassetFungibility: {
        _enum: {
            Fungible: string;
            NonFungible: string;
        };
    };
    /**
     * Lookup85: xcm::v3::multiasset::AssetInstance
     **/
    XcmV3MultiassetAssetInstance: {
        _enum: {
            Undefined: string;
            Index: string;
            Array4: string;
            Array8: string;
            Array16: string;
            Array32: string;
        };
    };
    /**
     * Lookup88: xcm::v3::Response
     **/
    XcmV3Response: {
        _enum: {
            Null: string;
            Assets: string;
            ExecutionResult: string;
            Version: string;
            PalletsInfo: string;
            DispatchResult: string;
        };
    };
    /**
     * Lookup92: xcm::v3::PalletInfo
     **/
    XcmV3PalletInfo: {
        index: string;
        name: string;
        moduleName: string;
        major: string;
        minor: string;
        patch: string;
    };
    /**
     * Lookup95: xcm::v3::MaybeErrorCode
     **/
    XcmV3MaybeErrorCode: {
        _enum: {
            Success: string;
            Error: string;
            TruncatedError: string;
        };
    };
    /**
     * Lookup98: xcm::v2::OriginKind
     **/
    XcmV2OriginKind: {
        _enum: string[];
    };
    /**
     * Lookup99: xcm::double_encoded::DoubleEncoded<T>
     **/
    XcmDoubleEncoded: {
        encoded: string;
    };
    /**
     * Lookup100: xcm::v3::QueryResponseInfo
     **/
    XcmV3QueryResponseInfo: {
        destination: string;
        queryId: string;
        maxWeight: string;
    };
    /**
     * Lookup101: xcm::v3::multiasset::MultiAssetFilter
     **/
    XcmV3MultiassetMultiAssetFilter: {
        _enum: {
            Definite: string;
            Wild: string;
        };
    };
    /**
     * Lookup102: xcm::v3::multiasset::WildMultiAsset
     **/
    XcmV3MultiassetWildMultiAsset: {
        _enum: {
            All: string;
            AllOf: {
                id: string;
                fun: string;
            };
            AllCounted: string;
            AllOfCounted: {
                id: string;
                fun: string;
                count: string;
            };
        };
    };
    /**
     * Lookup103: xcm::v3::multiasset::WildFungibility
     **/
    XcmV3MultiassetWildFungibility: {
        _enum: string[];
    };
    /**
     * Lookup104: xcm::v3::WeightLimit
     **/
    XcmV3WeightLimit: {
        _enum: {
            Unlimited: string;
            Limited: string;
        };
    };
    /**
     * Lookup105: xcm::VersionedMultiAssets
     **/
    XcmVersionedMultiAssets: {
        _enum: {
            __Unused0: string;
            V2: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup106: xcm::v2::multiasset::MultiAssets
     **/
    XcmV2MultiassetMultiAssets: string;
    /**
     * Lookup108: xcm::v2::multiasset::MultiAsset
     **/
    XcmV2MultiAsset: {
        id: string;
        fun: string;
    };
    /**
     * Lookup109: xcm::v2::multiasset::AssetId
     **/
    XcmV2MultiassetAssetId: {
        _enum: {
            Concrete: string;
            Abstract: string;
        };
    };
    /**
     * Lookup110: xcm::v2::multilocation::MultiLocation
     **/
    XcmV2MultiLocation: {
        parents: string;
        interior: string;
    };
    /**
     * Lookup111: xcm::v2::multilocation::Junctions
     **/
    XcmV2MultilocationJunctions: {
        _enum: {
            Here: string;
            X1: string;
            X2: string;
            X3: string;
            X4: string;
            X5: string;
            X6: string;
            X7: string;
            X8: string;
        };
    };
    /**
     * Lookup112: xcm::v2::junction::Junction
     **/
    XcmV2Junction: {
        _enum: {
            Parachain: string;
            AccountId32: {
                network: string;
                id: string;
            };
            AccountIndex64: {
                network: string;
                index: string;
            };
            AccountKey20: {
                network: string;
                key: string;
            };
            PalletInstance: string;
            GeneralIndex: string;
            GeneralKey: string;
            OnlyChild: string;
            Plurality: {
                id: string;
                part: string;
            };
        };
    };
    /**
     * Lookup113: xcm::v2::NetworkId
     **/
    XcmV2NetworkId: {
        _enum: {
            Any: string;
            Named: string;
            Polkadot: string;
            Kusama: string;
        };
    };
    /**
     * Lookup115: xcm::v2::BodyId
     **/
    XcmV2BodyId: {
        _enum: {
            Unit: string;
            Named: string;
            Index: string;
            Executive: string;
            Technical: string;
            Legislative: string;
            Judicial: string;
            Defense: string;
            Administration: string;
            Treasury: string;
        };
    };
    /**
     * Lookup116: xcm::v2::BodyPart
     **/
    XcmV2BodyPart: {
        _enum: {
            Voice: string;
            Members: {
                count: string;
            };
            Fraction: {
                nom: string;
                denom: string;
            };
            AtLeastProportion: {
                nom: string;
                denom: string;
            };
            MoreThanProportion: {
                nom: string;
                denom: string;
            };
        };
    };
    /**
     * Lookup117: xcm::v2::multiasset::Fungibility
     **/
    XcmV2MultiassetFungibility: {
        _enum: {
            Fungible: string;
            NonFungible: string;
        };
    };
    /**
     * Lookup118: xcm::v2::multiasset::AssetInstance
     **/
    XcmV2MultiassetAssetInstance: {
        _enum: {
            Undefined: string;
            Index: string;
            Array4: string;
            Array8: string;
            Array16: string;
            Array32: string;
            Blob: string;
        };
    };
    /**
     * Lookup119: xcm::VersionedMultiLocation
     **/
    XcmVersionedMultiLocation: {
        _enum: {
            __Unused0: string;
            V2: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup120: cumulus_pallet_xcm::pallet::Event<T>
     **/
    CumulusPalletXcmEvent: {
        _enum: {
            InvalidFormat: string;
            UnsupportedVersion: string;
            ExecutedDownward: string;
        };
    };
    /**
     * Lookup121: cumulus_pallet_dmp_queue::pallet::Event<T>
     **/
    CumulusPalletDmpQueueEvent: {
        _enum: {
            InvalidFormat: {
                messageId: string;
            };
            UnsupportedVersion: {
                messageId: string;
            };
            ExecutedDownward: {
                messageId: string;
                outcome: string;
            };
            WeightExhausted: {
                messageId: string;
                remainingWeight: string;
                requiredWeight: string;
            };
            OverweightEnqueued: {
                messageId: string;
                overweightIndex: string;
                requiredWeight: string;
            };
            OverweightServiced: {
                overweightIndex: string;
                weightUsed: string;
            };
            MaxMessagesExhausted: {
                messageId: string;
            };
        };
    };
    /**
     * Lookup122: pallet_xc_asset_config::pallet::Event<T>
     **/
    PalletXcAssetConfigEvent: {
        _enum: {
            AssetRegistered: {
                assetLocation: string;
                assetId: string;
            };
            UnitsPerSecondChanged: {
                assetLocation: string;
                unitsPerSecond: string;
            };
            AssetLocationChanged: {
                previousAssetLocation: string;
                assetId: string;
                newAssetLocation: string;
            };
            SupportedAssetRemoved: {
                assetLocation: string;
            };
            AssetRemoved: {
                assetLocation: string;
                assetId: string;
            };
        };
    };
    /**
     * Lookup123: orml_xtokens::module::Event<T>
     **/
    OrmlXtokensModuleEvent: {
        _enum: {
            TransferredMultiAssets: {
                sender: string;
                assets: string;
                fee: string;
                dest: string;
            };
        };
    };
    /**
     * Lookup124: pallet_evm::pallet::Event<T>
     **/
    PalletEvmEvent: {
        _enum: {
            Log: {
                log: string;
            };
            Created: {
                address: string;
            };
            CreatedFailed: {
                address: string;
            };
            Executed: {
                address: string;
            };
            ExecutedFailed: {
                address: string;
            };
        };
    };
    /**
     * Lookup125: ethereum::log::Log
     **/
    EthereumLog: {
        address: string;
        topics: string;
        data: string;
    };
    /**
     * Lookup127: pallet_ethereum::pallet::Event
     **/
    PalletEthereumEvent: {
        _enum: {
            Executed: {
                from: string;
                to: string;
                transactionHash: string;
                exitReason: string;
                extraData: string;
            };
        };
    };
    /**
     * Lookup128: evm_core::error::ExitReason
     **/
    EvmCoreErrorExitReason: {
        _enum: {
            Succeed: string;
            Error: string;
            Revert: string;
            Fatal: string;
        };
    };
    /**
     * Lookup129: evm_core::error::ExitSucceed
     **/
    EvmCoreErrorExitSucceed: {
        _enum: string[];
    };
    /**
     * Lookup130: evm_core::error::ExitError
     **/
    EvmCoreErrorExitError: {
        _enum: {
            StackUnderflow: string;
            StackOverflow: string;
            InvalidJump: string;
            InvalidRange: string;
            DesignatedInvalid: string;
            CallTooDeep: string;
            CreateCollision: string;
            CreateContractLimit: string;
            OutOfOffset: string;
            OutOfGas: string;
            OutOfFund: string;
            PCUnderflow: string;
            CreateEmpty: string;
            Other: string;
            MaxNonce: string;
            InvalidCode: string;
        };
    };
    /**
     * Lookup134: evm_core::error::ExitRevert
     **/
    EvmCoreErrorExitRevert: {
        _enum: string[];
    };
    /**
     * Lookup135: evm_core::error::ExitFatal
     **/
    EvmCoreErrorExitFatal: {
        _enum: {
            NotSupported: string;
            UnhandledInterrupt: string;
            CallErrorAsFatal: string;
            Other: string;
        };
    };
    /**
     * Lookup136: pallet_dynamic_evm_base_fee::pallet::Event
     **/
    PalletDynamicEvmBaseFeeEvent: {
        _enum: {
            NewBaseFeePerGas: {
                fee: string;
            };
        };
    };
    /**
     * Lookup139: pallet_unified_accounts::pallet::Event<T>
     **/
    PalletUnifiedAccountsEvent: {
        _enum: {
            AccountClaimed: {
                accountId: string;
                evmAddress: string;
            };
        };
    };
    /**
     * Lookup140: pallet_contracts::pallet::Event<T>
     **/
    PalletContractsEvent: {
        _enum: {
            Instantiated: {
                deployer: string;
                contract: string;
            };
            Terminated: {
                contract: string;
                beneficiary: string;
            };
            CodeStored: {
                codeHash: string;
            };
            ContractEmitted: {
                contract: string;
                data: string;
            };
            CodeRemoved: {
                codeHash: string;
            };
            ContractCodeUpdated: {
                contract: string;
                newCodeHash: string;
                oldCodeHash: string;
            };
            Called: {
                caller: string;
                contract: string;
            };
            DelegateCalled: {
                contract: string;
                codeHash: string;
            };
        };
    };
    /**
     * Lookup141: pallet_contracts::Origin<shibuya_runtime::Runtime>
     **/
    PalletContractsOrigin: {
        _enum: {
            Root: string;
            Signed: string;
        };
    };
    /**
     * Lookup142: shibuya_runtime::Runtime
     **/
    ShibuyaRuntimeRuntime: string;
    /**
     * Lookup143: pallet_democracy::pallet::Event<T>
     **/
    PalletDemocracyEvent: {
        _enum: {
            Proposed: {
                proposalIndex: string;
                deposit: string;
            };
            Tabled: {
                proposalIndex: string;
                deposit: string;
            };
            ExternalTabled: string;
            Started: {
                refIndex: string;
                threshold: string;
            };
            Passed: {
                refIndex: string;
            };
            NotPassed: {
                refIndex: string;
            };
            Cancelled: {
                refIndex: string;
            };
            Delegated: {
                who: string;
                target: string;
            };
            Undelegated: {
                account: string;
            };
            Vetoed: {
                who: string;
                proposalHash: string;
                until: string;
            };
            Blacklisted: {
                proposalHash: string;
            };
            Voted: {
                voter: string;
                refIndex: string;
                vote: string;
            };
            Seconded: {
                seconder: string;
                propIndex: string;
            };
            ProposalCanceled: {
                propIndex: string;
            };
            MetadataSet: {
                _alias: {
                    hash_: string;
                };
                owner: string;
                hash_: string;
            };
            MetadataCleared: {
                _alias: {
                    hash_: string;
                };
                owner: string;
                hash_: string;
            };
            MetadataTransferred: {
                _alias: {
                    hash_: string;
                };
                prevOwner: string;
                owner: string;
                hash_: string;
            };
        };
    };
    /**
     * Lookup144: pallet_democracy::vote_threshold::VoteThreshold
     **/
    PalletDemocracyVoteThreshold: {
        _enum: string[];
    };
    /**
     * Lookup145: pallet_democracy::vote::AccountVote<Balance>
     **/
    PalletDemocracyVoteAccountVote: {
        _enum: {
            Standard: {
                vote: string;
                balance: string;
            };
            Split: {
                aye: string;
                nay: string;
            };
        };
    };
    /**
     * Lookup147: pallet_democracy::types::MetadataOwner
     **/
    PalletDemocracyMetadataOwner: {
        _enum: {
            External: string;
            Proposal: string;
            Referendum: string;
        };
    };
    /**
     * Lookup148: pallet_collective::pallet::Event<T, I>
     **/
    PalletCollectiveEvent: {
        _enum: {
            Proposed: {
                account: string;
                proposalIndex: string;
                proposalHash: string;
                threshold: string;
            };
            Voted: {
                account: string;
                proposalHash: string;
                voted: string;
                yes: string;
                no: string;
            };
            Approved: {
                proposalHash: string;
            };
            Disapproved: {
                proposalHash: string;
            };
            Executed: {
                proposalHash: string;
                result: string;
            };
            MemberExecuted: {
                proposalHash: string;
                result: string;
            };
            Closed: {
                proposalHash: string;
                yes: string;
                no: string;
            };
        };
    };
    /**
     * Lookup150: pallet_treasury::pallet::Event<T, I>
     **/
    PalletTreasuryEvent: {
        _enum: {
            Proposed: {
                proposalIndex: string;
            };
            Spending: {
                budgetRemaining: string;
            };
            Awarded: {
                proposalIndex: string;
                award: string;
                account: string;
            };
            Rejected: {
                proposalIndex: string;
                slashed: string;
            };
            Burnt: {
                burntFunds: string;
            };
            Rollover: {
                rolloverBalance: string;
            };
            Deposit: {
                value: string;
            };
            SpendApproved: {
                proposalIndex: string;
                amount: string;
                beneficiary: string;
            };
            UpdatedInactive: {
                reactivated: string;
                deactivated: string;
            };
        };
    };
    /**
     * Lookup151: pallet_preimage::pallet::Event<T>
     **/
    PalletPreimageEvent: {
        _enum: {
            Noted: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            Requested: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            Cleared: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
        };
    };
    /**
     * Lookup152: pallet_sudo::pallet::Event<T>
     **/
    PalletSudoEvent: {
        _enum: {
            Sudid: {
                sudoResult: string;
            };
            KeyChanged: {
                oldSudoer: string;
            };
            SudoAsDone: {
                sudoResult: string;
            };
        };
    };
    /**
     * Lookup153: pallet_static_price_provider::pallet::Event<T>
     **/
    PalletStaticPriceProviderEvent: {
        _enum: {
            PriceSet: {
                price: string;
            };
        };
    };
    /**
     * Lookup155: frame_system::Phase
     **/
    FrameSystemPhase: {
        _enum: {
            ApplyExtrinsic: string;
            Finalization: string;
            Initialization: string;
        };
    };
    /**
     * Lookup157: frame_system::LastRuntimeUpgradeInfo
     **/
    FrameSystemLastRuntimeUpgradeInfo: {
        specVersion: string;
        specName: string;
    };
    /**
     * Lookup158: frame_system::pallet::Call<T>
     **/
    FrameSystemCall: {
        _enum: {
            remark: {
                remark: string;
            };
            set_heap_pages: {
                pages: string;
            };
            set_code: {
                code: string;
            };
            set_code_without_checks: {
                code: string;
            };
            set_storage: {
                items: string;
            };
            kill_storage: {
                _alias: {
                    keys_: string;
                };
                keys_: string;
            };
            kill_prefix: {
                prefix: string;
                subkeys: string;
            };
            remark_with_event: {
                remark: string;
            };
        };
    };
    /**
     * Lookup162: frame_system::limits::BlockWeights
     **/
    FrameSystemLimitsBlockWeights: {
        baseBlock: string;
        maxBlock: string;
        perClass: string;
    };
    /**
     * Lookup163: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
     **/
    FrameSupportDispatchPerDispatchClassWeightsPerClass: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup164: frame_system::limits::WeightsPerClass
     **/
    FrameSystemLimitsWeightsPerClass: {
        baseExtrinsic: string;
        maxExtrinsic: string;
        maxTotal: string;
        reserved: string;
    };
    /**
     * Lookup166: frame_system::limits::BlockLength
     **/
    FrameSystemLimitsBlockLength: {
        max: string;
    };
    /**
     * Lookup167: frame_support::dispatch::PerDispatchClass<T>
     **/
    FrameSupportDispatchPerDispatchClassU32: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup168: sp_weights::RuntimeDbWeight
     **/
    SpWeightsRuntimeDbWeight: {
        read: string;
        write: string;
    };
    /**
     * Lookup169: sp_version::RuntimeVersion
     **/
    SpVersionRuntimeVersion: {
        specName: string;
        implName: string;
        authoringVersion: string;
        specVersion: string;
        implVersion: string;
        apis: string;
        transactionVersion: string;
        stateVersion: string;
    };
    /**
     * Lookup173: frame_system::pallet::Error<T>
     **/
    FrameSystemError: {
        _enum: string[];
    };
    /**
     * Lookup174: pallet_utility::pallet::Call<T>
     **/
    PalletUtilityCall: {
        _enum: {
            batch: {
                calls: string;
            };
            as_derivative: {
                index: string;
                call: string;
            };
            batch_all: {
                calls: string;
            };
            dispatch_as: {
                asOrigin: string;
                call: string;
            };
            force_batch: {
                calls: string;
            };
            with_weight: {
                call: string;
                weight: string;
            };
        };
    };
    /**
     * Lookup177: pallet_identity::pallet::Call<T>
     **/
    PalletIdentityCall: {
        _enum: {
            add_registrar: {
                account: string;
            };
            set_identity: {
                info: string;
            };
            set_subs: {
                subs: string;
            };
            clear_identity: string;
            request_judgement: {
                regIndex: string;
                maxFee: string;
            };
            cancel_request: {
                regIndex: string;
            };
            set_fee: {
                index: string;
                fee: string;
            };
            set_account_id: {
                _alias: {
                    new_: string;
                };
                index: string;
                new_: string;
            };
            set_fields: {
                index: string;
                fields: string;
            };
            provide_judgement: {
                regIndex: string;
                target: string;
                judgement: string;
                identity: string;
            };
            kill_identity: {
                target: string;
            };
            add_sub: {
                sub: string;
                data: string;
            };
            rename_sub: {
                sub: string;
                data: string;
            };
            remove_sub: {
                sub: string;
            };
            quit_sub: string;
        };
    };
    /**
     * Lookup180: pallet_identity::types::IdentityInfo<FieldLimit>
     **/
    PalletIdentityIdentityInfo: {
        additional: string;
        display: string;
        legal: string;
        web: string;
        riot: string;
        email: string;
        pgpFingerprint: string;
        image: string;
        twitter: string;
    };
    /**
     * Lookup216: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
     **/
    PalletIdentityBitFlags: {
        _bitLength: number;
        Display: number;
        Legal: number;
        Web: number;
        Riot: number;
        Email: number;
        PgpFingerprint: number;
        Image: number;
        Twitter: number;
    };
    /**
     * Lookup217: pallet_identity::types::IdentityField
     **/
    PalletIdentityIdentityField: {
        _enum: string[];
    };
    /**
     * Lookup218: pallet_identity::types::Judgement<Balance>
     **/
    PalletIdentityJudgement: {
        _enum: {
            Unknown: string;
            FeePaid: string;
            Reasonable: string;
            KnownGood: string;
            OutOfDate: string;
            LowQuality: string;
            Erroneous: string;
        };
    };
    /**
     * Lookup219: pallet_timestamp::pallet::Call<T>
     **/
    PalletTimestampCall: {
        _enum: {
            set: {
                now: string;
            };
        };
    };
    /**
     * Lookup220: pallet_multisig::pallet::Call<T>
     **/
    PalletMultisigCall: {
        _enum: {
            as_multi_threshold_1: {
                otherSignatories: string;
                call: string;
            };
            as_multi: {
                threshold: string;
                otherSignatories: string;
                maybeTimepoint: string;
                call: string;
                maxWeight: string;
            };
            approve_as_multi: {
                threshold: string;
                otherSignatories: string;
                maybeTimepoint: string;
                callHash: string;
                maxWeight: string;
            };
            cancel_as_multi: {
                threshold: string;
                otherSignatories: string;
                timepoint: string;
                callHash: string;
            };
        };
    };
    /**
     * Lookup222: pallet_scheduler::pallet::Call<T>
     **/
    PalletSchedulerCall: {
        _enum: {
            schedule: {
                when: string;
                maybePeriodic: string;
                priority: string;
                call: string;
            };
            cancel: {
                when: string;
                index: string;
            };
            schedule_named: {
                id: string;
                when: string;
                maybePeriodic: string;
                priority: string;
                call: string;
            };
            cancel_named: {
                id: string;
            };
            schedule_after: {
                after: string;
                maybePeriodic: string;
                priority: string;
                call: string;
            };
            schedule_named_after: {
                id: string;
                after: string;
                maybePeriodic: string;
                priority: string;
                call: string;
            };
        };
    };
    /**
     * Lookup224: pallet_proxy::pallet::Call<T>
     **/
    PalletProxyCall: {
        _enum: {
            proxy: {
                real: string;
                forceProxyType: string;
                call: string;
            };
            add_proxy: {
                delegate: string;
                proxyType: string;
                delay: string;
            };
            remove_proxy: {
                delegate: string;
                proxyType: string;
                delay: string;
            };
            remove_proxies: string;
            create_pure: {
                proxyType: string;
                delay: string;
                index: string;
            };
            kill_pure: {
                spawner: string;
                proxyType: string;
                index: string;
                height: string;
                extIndex: string;
            };
            announce: {
                real: string;
                callHash: string;
            };
            remove_announcement: {
                real: string;
                callHash: string;
            };
            reject_announcement: {
                delegate: string;
                callHash: string;
            };
            proxy_announced: {
                delegate: string;
                real: string;
                forceProxyType: string;
                call: string;
            };
        };
    };
    /**
     * Lookup226: cumulus_pallet_parachain_system::pallet::Call<T>
     **/
    CumulusPalletParachainSystemCall: {
        _enum: {
            set_validation_data: {
                data: string;
            };
            sudo_send_upward_message: {
                message: string;
            };
            authorize_upgrade: {
                codeHash: string;
                checkVersion: string;
            };
            enact_authorized_upgrade: {
                code: string;
            };
        };
    };
    /**
     * Lookup227: cumulus_primitives_parachain_inherent::ParachainInherentData
     **/
    CumulusPrimitivesParachainInherentParachainInherentData: {
        validationData: string;
        relayChainState: string;
        downwardMessages: string;
        horizontalMessages: string;
    };
    /**
     * Lookup228: polkadot_primitives::v4::PersistedValidationData<primitive_types::H256, N>
     **/
    PolkadotPrimitivesV4PersistedValidationData: {
        parentHead: string;
        relayParentNumber: string;
        relayParentStorageRoot: string;
        maxPovSize: string;
    };
    /**
     * Lookup230: sp_trie::storage_proof::StorageProof
     **/
    SpTrieStorageProof: {
        trieNodes: string;
    };
    /**
     * Lookup233: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
     **/
    PolkadotCorePrimitivesInboundDownwardMessage: {
        sentAt: string;
        msg: string;
    };
    /**
     * Lookup236: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
     **/
    PolkadotCorePrimitivesInboundHrmpMessage: {
        sentAt: string;
        data: string;
    };
    /**
     * Lookup239: parachain_info::pallet::Call<T>
     **/
    ParachainInfoCall: string;
    /**
     * Lookup240: pallet_balances::pallet::Call<T, I>
     **/
    PalletBalancesCall: {
        _enum: {
            transfer_allow_death: {
                dest: string;
                value: string;
            };
            set_balance_deprecated: {
                who: string;
                newFree: string;
                oldReserved: string;
            };
            force_transfer: {
                source: string;
                dest: string;
                value: string;
            };
            transfer_keep_alive: {
                dest: string;
                value: string;
            };
            transfer_all: {
                dest: string;
                keepAlive: string;
            };
            force_unreserve: {
                who: string;
                amount: string;
            };
            upgrade_accounts: {
                who: string;
            };
            transfer: {
                dest: string;
                value: string;
            };
            force_set_balance: {
                who: string;
                newFree: string;
            };
        };
    };
    /**
     * Lookup241: pallet_vesting::pallet::Call<T>
     **/
    PalletVestingCall: {
        _enum: {
            vest: string;
            vest_other: {
                target: string;
            };
            vested_transfer: {
                target: string;
                schedule: string;
            };
            force_vested_transfer: {
                source: string;
                target: string;
                schedule: string;
            };
            merge_schedules: {
                schedule1Index: string;
                schedule2Index: string;
            };
        };
    };
    /**
     * Lookup242: pallet_vesting::vesting_info::VestingInfo<Balance, BlockNumber>
     **/
    PalletVestingVestingInfo: {
        locked: string;
        perBlock: string;
        startingBlock: string;
    };
    /**
     * Lookup243: pallet_dapp_staking_v3::pallet::Call<T>
     **/
    PalletDappStakingV3Call: {
        _enum: {
            maintenance_mode: {
                enabled: string;
            };
            register: {
                owner: string;
                smartContract: string;
            };
            set_dapp_reward_beneficiary: {
                smartContract: string;
                beneficiary: string;
            };
            set_dapp_owner: {
                smartContract: string;
                newOwner: string;
            };
            unbond_and_unstake: {
                contractId: string;
                value: string;
            };
            withdraw_unbonded: string;
            unregister: {
                smartContract: string;
            };
            lock: {
                amount: string;
            };
            unlock: {
                amount: string;
            };
            claim_unlocked: string;
            relock_unlocking: string;
            stake: {
                smartContract: string;
                amount: string;
            };
            unstake: {
                smartContract: string;
                amount: string;
            };
            claim_staker_rewards: string;
            claim_bonus_reward: {
                smartContract: string;
            };
            claim_dapp_reward: {
                smartContract: string;
                era: string;
            };
            unstake_from_unregistered: {
                smartContract: string;
            };
            cleanup_expired_entries: string;
            force: {
                forcingType: string;
            };
            __Unused19: string;
            __Unused20: string;
            __Unused21: string;
            __Unused22: string;
            __Unused23: string;
            __Unused24: string;
            __Unused25: string;
            __Unused26: string;
            __Unused27: string;
            __Unused28: string;
            __Unused29: string;
            __Unused30: string;
            __Unused31: string;
            __Unused32: string;
            __Unused33: string;
            __Unused34: string;
            __Unused35: string;
            __Unused36: string;
            __Unused37: string;
            __Unused38: string;
            __Unused39: string;
            __Unused40: string;
            __Unused41: string;
            __Unused42: string;
            __Unused43: string;
            __Unused44: string;
            __Unused45: string;
            __Unused46: string;
            __Unused47: string;
            __Unused48: string;
            __Unused49: string;
            __Unused50: string;
            __Unused51: string;
            __Unused52: string;
            __Unused53: string;
            __Unused54: string;
            __Unused55: string;
            __Unused56: string;
            __Unused57: string;
            __Unused58: string;
            __Unused59: string;
            __Unused60: string;
            __Unused61: string;
            __Unused62: string;
            __Unused63: string;
            __Unused64: string;
            __Unused65: string;
            __Unused66: string;
            __Unused67: string;
            __Unused68: string;
            __Unused69: string;
            __Unused70: string;
            __Unused71: string;
            __Unused72: string;
            __Unused73: string;
            __Unused74: string;
            __Unused75: string;
            __Unused76: string;
            __Unused77: string;
            __Unused78: string;
            __Unused79: string;
            __Unused80: string;
            __Unused81: string;
            __Unused82: string;
            __Unused83: string;
            __Unused84: string;
            __Unused85: string;
            __Unused86: string;
            __Unused87: string;
            __Unused88: string;
            __Unused89: string;
            __Unused90: string;
            __Unused91: string;
            __Unused92: string;
            __Unused93: string;
            __Unused94: string;
            __Unused95: string;
            __Unused96: string;
            __Unused97: string;
            __Unused98: string;
            __Unused99: string;
            force_set_tier_params: {
                value: string;
            };
            force_set_tier_config: {
                value: string;
            };
        };
    };
    /**
     * Lookup244: pallet_dapp_staking_v3::types::TierParameters<NT>
     **/
    PalletDappStakingV3TierParameters: {
        rewardPortion: string;
        slotDistribution: string;
        tierThresholds: string;
    };
    /**
     * Lookup249: pallet_dapp_staking_v3::types::TierThreshold
     **/
    PalletDappStakingV3TierThreshold: {
        _enum: {
            FixedTvlAmount: {
                amount: string;
            };
            DynamicTvlAmount: {
                amount: string;
                minimumAmount: string;
            };
        };
    };
    /**
     * Lookup251: pallet_dapp_staking_v3::types::TiersConfiguration<NT>
     **/
    PalletDappStakingV3TiersConfiguration: {
        numberOfSlots: string;
        slotsPerTier: string;
        rewardPortion: string;
        tierThresholds: string;
    };
    /**
     * Lookup255: pallet_inflation::pallet::Call<T>
     **/
    PalletInflationCall: {
        _enum: {
            force_set_inflation_params: {
                params: string;
            };
            force_inflation_recalculation: {
                nextEra: string;
            };
            force_set_inflation_config: {
                config: string;
            };
        };
    };
    /**
     * Lookup256: pallet_inflation::InflationParameters
     **/
    PalletInflationInflationParameters: {
        maxInflationRate: string;
        treasuryPart: string;
        collatorsPart: string;
        dappsPart: string;
        baseStakersPart: string;
        adjustableStakersPart: string;
        bonusPart: string;
        idealStakingRate: string;
    };
    /**
     * Lookup257: pallet_assets::pallet::Call<T, I>
     **/
    PalletAssetsCall: {
        _enum: {
            create: {
                id: string;
                admin: string;
                minBalance: string;
            };
            force_create: {
                id: string;
                owner: string;
                isSufficient: string;
                minBalance: string;
            };
            start_destroy: {
                id: string;
            };
            destroy_accounts: {
                id: string;
            };
            destroy_approvals: {
                id: string;
            };
            finish_destroy: {
                id: string;
            };
            mint: {
                id: string;
                beneficiary: string;
                amount: string;
            };
            burn: {
                id: string;
                who: string;
                amount: string;
            };
            transfer: {
                id: string;
                target: string;
                amount: string;
            };
            transfer_keep_alive: {
                id: string;
                target: string;
                amount: string;
            };
            force_transfer: {
                id: string;
                source: string;
                dest: string;
                amount: string;
            };
            freeze: {
                id: string;
                who: string;
            };
            thaw: {
                id: string;
                who: string;
            };
            freeze_asset: {
                id: string;
            };
            thaw_asset: {
                id: string;
            };
            transfer_ownership: {
                id: string;
                owner: string;
            };
            set_team: {
                id: string;
                issuer: string;
                admin: string;
                freezer: string;
            };
            set_metadata: {
                id: string;
                name: string;
                symbol: string;
                decimals: string;
            };
            clear_metadata: {
                id: string;
            };
            force_set_metadata: {
                id: string;
                name: string;
                symbol: string;
                decimals: string;
                isFrozen: string;
            };
            force_clear_metadata: {
                id: string;
            };
            force_asset_status: {
                id: string;
                owner: string;
                issuer: string;
                admin: string;
                freezer: string;
                minBalance: string;
                isSufficient: string;
                isFrozen: string;
            };
            approve_transfer: {
                id: string;
                delegate: string;
                amount: string;
            };
            cancel_approval: {
                id: string;
                delegate: string;
            };
            force_cancel_approval: {
                id: string;
                owner: string;
                delegate: string;
            };
            transfer_approved: {
                id: string;
                owner: string;
                destination: string;
                amount: string;
            };
            touch: {
                id: string;
            };
            refund: {
                id: string;
                allowBurn: string;
            };
            set_min_balance: {
                id: string;
                minBalance: string;
            };
            touch_other: {
                id: string;
                who: string;
            };
            refund_other: {
                id: string;
                who: string;
            };
            block: {
                id: string;
                who: string;
            };
        };
    };
    /**
     * Lookup258: pallet_collator_selection::pallet::Call<T>
     **/
    PalletCollatorSelectionCall: {
        _enum: {
            set_invulnerables: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_desired_candidates: {
                max: string;
            };
            set_candidacy_bond: {
                bond: string;
            };
            register_as_candidate: string;
            leave_intent: string;
        };
    };
    /**
     * Lookup259: pallet_session::pallet::Call<T>
     **/
    PalletSessionCall: {
        _enum: {
            set_keys: {
                _alias: {
                    keys_: string;
                };
                keys_: string;
                proof: string;
            };
            purge_keys: string;
        };
    };
    /**
     * Lookup260: shibuya_runtime::SessionKeys
     **/
    ShibuyaRuntimeSessionKeys: {
        aura: string;
    };
    /**
     * Lookup261: sp_consensus_aura::sr25519::app_sr25519::Public
     **/
    SpConsensusAuraSr25519AppSr25519Public: string;
    /**
     * Lookup262: sp_core::sr25519::Public
     **/
    SpCoreSr25519Public: string;
    /**
     * Lookup263: cumulus_pallet_xcmp_queue::pallet::Call<T>
     **/
    CumulusPalletXcmpQueueCall: {
        _enum: {
            service_overweight: {
                index: string;
                weightLimit: string;
            };
            suspend_xcm_execution: string;
            resume_xcm_execution: string;
            update_suspend_threshold: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_drop_threshold: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_resume_threshold: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_threshold_weight: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_weight_restrict_decay: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_xcmp_max_individual_weight: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
        };
    };
    /**
     * Lookup264: pallet_xcm::pallet::Call<T>
     **/
    PalletXcmCall: {
        _enum: {
            send: {
                dest: string;
                message: string;
            };
            teleport_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
            };
            reserve_transfer_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
            };
            execute: {
                message: string;
                maxWeight: string;
            };
            force_xcm_version: {
                location: string;
                xcmVersion: string;
            };
            force_default_xcm_version: {
                maybeXcmVersion: string;
            };
            force_subscribe_version_notify: {
                location: string;
            };
            force_unsubscribe_version_notify: {
                location: string;
            };
            limited_reserve_transfer_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
                weightLimit: string;
            };
            limited_teleport_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
                weightLimit: string;
            };
            force_suspension: {
                suspended: string;
            };
        };
    };
    /**
     * Lookup265: xcm::VersionedXcm<RuntimeCall>
     **/
    XcmVersionedXcm: {
        _enum: {
            __Unused0: string;
            __Unused1: string;
            V2: string;
            V3: string;
        };
    };
    /**
     * Lookup266: xcm::v2::Xcm<RuntimeCall>
     **/
    XcmV2Xcm: string;
    /**
     * Lookup268: xcm::v2::Instruction<RuntimeCall>
     **/
    XcmV2Instruction: {
        _enum: {
            WithdrawAsset: string;
            ReserveAssetDeposited: string;
            ReceiveTeleportedAsset: string;
            QueryResponse: {
                queryId: string;
                response: string;
                maxWeight: string;
            };
            TransferAsset: {
                assets: string;
                beneficiary: string;
            };
            TransferReserveAsset: {
                assets: string;
                dest: string;
                xcm: string;
            };
            Transact: {
                originType: string;
                requireWeightAtMost: string;
                call: string;
            };
            HrmpNewChannelOpenRequest: {
                sender: string;
                maxMessageSize: string;
                maxCapacity: string;
            };
            HrmpChannelAccepted: {
                recipient: string;
            };
            HrmpChannelClosing: {
                initiator: string;
                sender: string;
                recipient: string;
            };
            ClearOrigin: string;
            DescendOrigin: string;
            ReportError: {
                queryId: string;
                dest: string;
                maxResponseWeight: string;
            };
            DepositAsset: {
                assets: string;
                maxAssets: string;
                beneficiary: string;
            };
            DepositReserveAsset: {
                assets: string;
                maxAssets: string;
                dest: string;
                xcm: string;
            };
            ExchangeAsset: {
                give: string;
                receive: string;
            };
            InitiateReserveWithdraw: {
                assets: string;
                reserve: string;
                xcm: string;
            };
            InitiateTeleport: {
                assets: string;
                dest: string;
                xcm: string;
            };
            QueryHolding: {
                queryId: string;
                dest: string;
                assets: string;
                maxResponseWeight: string;
            };
            BuyExecution: {
                fees: string;
                weightLimit: string;
            };
            RefundSurplus: string;
            SetErrorHandler: string;
            SetAppendix: string;
            ClearError: string;
            ClaimAsset: {
                assets: string;
                ticket: string;
            };
            Trap: string;
            SubscribeVersion: {
                queryId: string;
                maxResponseWeight: string;
            };
            UnsubscribeVersion: string;
        };
    };
    /**
     * Lookup269: xcm::v2::Response
     **/
    XcmV2Response: {
        _enum: {
            Null: string;
            Assets: string;
            ExecutionResult: string;
            Version: string;
        };
    };
    /**
     * Lookup272: xcm::v2::traits::Error
     **/
    XcmV2TraitsError: {
        _enum: {
            Overflow: string;
            Unimplemented: string;
            UntrustedReserveLocation: string;
            UntrustedTeleportLocation: string;
            MultiLocationFull: string;
            MultiLocationNotInvertible: string;
            BadOrigin: string;
            InvalidLocation: string;
            AssetNotFound: string;
            FailedToTransactAsset: string;
            NotWithdrawable: string;
            LocationCannotHold: string;
            ExceedsMaxMessageSize: string;
            DestinationUnsupported: string;
            Transport: string;
            Unroutable: string;
            UnknownClaim: string;
            FailedToDecode: string;
            MaxWeightInvalid: string;
            NotHoldingFees: string;
            TooExpensive: string;
            Trap: string;
            UnhandledXcmVersion: string;
            WeightLimitReached: string;
            Barrier: string;
            WeightNotComputable: string;
        };
    };
    /**
     * Lookup273: xcm::v2::multiasset::MultiAssetFilter
     **/
    XcmV2MultiassetMultiAssetFilter: {
        _enum: {
            Definite: string;
            Wild: string;
        };
    };
    /**
     * Lookup274: xcm::v2::multiasset::WildMultiAsset
     **/
    XcmV2MultiassetWildMultiAsset: {
        _enum: {
            All: string;
            AllOf: {
                id: string;
                fun: string;
            };
        };
    };
    /**
     * Lookup275: xcm::v2::multiasset::WildFungibility
     **/
    XcmV2MultiassetWildFungibility: {
        _enum: string[];
    };
    /**
     * Lookup276: xcm::v2::WeightLimit
     **/
    XcmV2WeightLimit: {
        _enum: {
            Unlimited: string;
            Limited: string;
        };
    };
    /**
     * Lookup286: cumulus_pallet_xcm::pallet::Call<T>
     **/
    CumulusPalletXcmCall: string;
    /**
     * Lookup287: cumulus_pallet_dmp_queue::pallet::Call<T>
     **/
    CumulusPalletDmpQueueCall: {
        _enum: {
            service_overweight: {
                index: string;
                weightLimit: string;
            };
        };
    };
    /**
     * Lookup288: pallet_xc_asset_config::pallet::Call<T>
     **/
    PalletXcAssetConfigCall: {
        _enum: {
            register_asset_location: {
                assetLocation: string;
                assetId: string;
            };
            set_asset_units_per_second: {
                assetLocation: string;
                unitsPerSecond: string;
            };
            change_existing_asset_location: {
                newAssetLocation: string;
                assetId: string;
            };
            remove_payment_asset: {
                assetLocation: string;
            };
            remove_asset: {
                assetId: string;
            };
        };
    };
    /**
     * Lookup289: orml_xtokens::module::Call<T>
     **/
    OrmlXtokensModuleCall: {
        _enum: {
            transfer: {
                currencyId: string;
                amount: string;
                dest: string;
                destWeightLimit: string;
            };
            transfer_multiasset: {
                asset: string;
                dest: string;
                destWeightLimit: string;
            };
            transfer_with_fee: {
                currencyId: string;
                amount: string;
                fee: string;
                dest: string;
                destWeightLimit: string;
            };
            transfer_multiasset_with_fee: {
                asset: string;
                fee: string;
                dest: string;
                destWeightLimit: string;
            };
            transfer_multicurrencies: {
                currencies: string;
                feeItem: string;
                dest: string;
                destWeightLimit: string;
            };
            transfer_multiassets: {
                assets: string;
                feeItem: string;
                dest: string;
                destWeightLimit: string;
            };
        };
    };
    /**
     * Lookup290: xcm::VersionedMultiAsset
     **/
    XcmVersionedMultiAsset: {
        _enum: {
            __Unused0: string;
            V2: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup293: pallet_evm::pallet::Call<T>
     **/
    PalletEvmCall: {
        _enum: {
            withdraw: {
                address: string;
                value: string;
            };
            call: {
                source: string;
                target: string;
                input: string;
                value: string;
                gasLimit: string;
                maxFeePerGas: string;
                maxPriorityFeePerGas: string;
                nonce: string;
                accessList: string;
            };
            create: {
                source: string;
                init: string;
                value: string;
                gasLimit: string;
                maxFeePerGas: string;
                maxPriorityFeePerGas: string;
                nonce: string;
                accessList: string;
            };
            create2: {
                source: string;
                init: string;
                salt: string;
                value: string;
                gasLimit: string;
                maxFeePerGas: string;
                maxPriorityFeePerGas: string;
                nonce: string;
                accessList: string;
            };
        };
    };
    /**
     * Lookup297: pallet_ethereum::pallet::Call<T>
     **/
    PalletEthereumCall: {
        _enum: {
            transact: {
                transaction: string;
            };
        };
    };
    /**
     * Lookup298: ethereum::transaction::TransactionV2
     **/
    EthereumTransactionTransactionV2: {
        _enum: {
            Legacy: string;
            EIP2930: string;
            EIP1559: string;
        };
    };
    /**
     * Lookup299: ethereum::transaction::LegacyTransaction
     **/
    EthereumTransactionLegacyTransaction: {
        nonce: string;
        gasPrice: string;
        gasLimit: string;
        action: string;
        value: string;
        input: string;
        signature: string;
    };
    /**
     * Lookup300: ethereum::transaction::TransactionAction
     **/
    EthereumTransactionTransactionAction: {
        _enum: {
            Call: string;
            Create: string;
        };
    };
    /**
     * Lookup301: ethereum::transaction::TransactionSignature
     **/
    EthereumTransactionTransactionSignature: {
        v: string;
        r: string;
        s: string;
    };
    /**
     * Lookup303: ethereum::transaction::EIP2930Transaction
     **/
    EthereumTransactionEip2930Transaction: {
        chainId: string;
        nonce: string;
        gasPrice: string;
        gasLimit: string;
        action: string;
        value: string;
        input: string;
        accessList: string;
        oddYParity: string;
        r: string;
        s: string;
    };
    /**
     * Lookup305: ethereum::transaction::AccessListItem
     **/
    EthereumTransactionAccessListItem: {
        address: string;
        storageKeys: string;
    };
    /**
     * Lookup306: ethereum::transaction::EIP1559Transaction
     **/
    EthereumTransactionEip1559Transaction: {
        chainId: string;
        nonce: string;
        maxPriorityFeePerGas: string;
        maxFeePerGas: string;
        gasLimit: string;
        action: string;
        value: string;
        input: string;
        accessList: string;
        oddYParity: string;
        r: string;
        s: string;
    };
    /**
     * Lookup307: pallet_dynamic_evm_base_fee::pallet::Call<T>
     **/
    PalletDynamicEvmBaseFeeCall: {
        _enum: {
            set_base_fee_per_gas: {
                fee: string;
            };
        };
    };
    /**
     * Lookup308: pallet_ethereum_checked::pallet::Call<T>
     **/
    PalletEthereumCheckedCall: {
        _enum: {
            transact: {
                tx: string;
            };
        };
    };
    /**
     * Lookup309: astar_primitives::ethereum_checked::CheckedEthereumTx
     **/
    AstarPrimitivesEthereumCheckedCheckedEthereumTx: {
        gasLimit: string;
        target: string;
        value: string;
        input: string;
        maybeAccessList: string;
    };
    /**
     * Lookup312: pallet_unified_accounts::pallet::Call<T>
     **/
    PalletUnifiedAccountsCall: {
        _enum: {
            claim_evm_address: {
                evmAddress: string;
                signature: string;
            };
            claim_default_evm_address: string;
        };
    };
    /**
     * Lookup314: pallet_contracts::pallet::Call<T>
     **/
    PalletContractsCall: {
        _enum: {
            call_old_weight: {
                dest: string;
                value: string;
                gasLimit: string;
                storageDepositLimit: string;
                data: string;
            };
            instantiate_with_code_old_weight: {
                value: string;
                gasLimit: string;
                storageDepositLimit: string;
                code: string;
                data: string;
                salt: string;
            };
            instantiate_old_weight: {
                value: string;
                gasLimit: string;
                storageDepositLimit: string;
                codeHash: string;
                data: string;
                salt: string;
            };
            upload_code: {
                code: string;
                storageDepositLimit: string;
                determinism: string;
            };
            remove_code: {
                codeHash: string;
            };
            set_code: {
                dest: string;
                codeHash: string;
            };
            call: {
                dest: string;
                value: string;
                gasLimit: string;
                storageDepositLimit: string;
                data: string;
            };
            instantiate_with_code: {
                value: string;
                gasLimit: string;
                storageDepositLimit: string;
                code: string;
                data: string;
                salt: string;
            };
            instantiate: {
                value: string;
                gasLimit: string;
                storageDepositLimit: string;
                codeHash: string;
                data: string;
                salt: string;
            };
            migrate: {
                weightLimit: string;
            };
        };
    };
    /**
     * Lookup316: pallet_contracts::wasm::Determinism
     **/
    PalletContractsWasmDeterminism: {
        _enum: string[];
    };
    /**
     * Lookup317: pallet_democracy::pallet::Call<T>
     **/
    PalletDemocracyCall: {
        _enum: {
            propose: {
                proposal: string;
                value: string;
            };
            second: {
                proposal: string;
            };
            vote: {
                refIndex: string;
                vote: string;
            };
            emergency_cancel: {
                refIndex: string;
            };
            external_propose: {
                proposal: string;
            };
            external_propose_majority: {
                proposal: string;
            };
            external_propose_default: {
                proposal: string;
            };
            fast_track: {
                proposalHash: string;
                votingPeriod: string;
                delay: string;
            };
            veto_external: {
                proposalHash: string;
            };
            cancel_referendum: {
                refIndex: string;
            };
            delegate: {
                to: string;
                conviction: string;
                balance: string;
            };
            undelegate: string;
            clear_public_proposals: string;
            unlock: {
                target: string;
            };
            remove_vote: {
                index: string;
            };
            remove_other_vote: {
                target: string;
                index: string;
            };
            blacklist: {
                proposalHash: string;
                maybeRefIndex: string;
            };
            cancel_proposal: {
                propIndex: string;
            };
            set_metadata: {
                owner: string;
                maybeHash: string;
            };
        };
    };
    /**
     * Lookup318: frame_support::traits::preimages::Bounded<shibuya_runtime::RuntimeCall>
     **/
    FrameSupportPreimagesBounded: {
        _enum: {
            Legacy: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            Inline: string;
            Lookup: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
                len: string;
            };
        };
    };
    /**
     * Lookup320: pallet_democracy::conviction::Conviction
     **/
    PalletDemocracyConviction: {
        _enum: string[];
    };
    /**
     * Lookup322: pallet_collective::pallet::Call<T, I>
     **/
    PalletCollectiveCall: {
        _enum: {
            set_members: {
                newMembers: string;
                prime: string;
                oldCount: string;
            };
            execute: {
                proposal: string;
                lengthBound: string;
            };
            propose: {
                threshold: string;
                proposal: string;
                lengthBound: string;
            };
            vote: {
                proposal: string;
                index: string;
                approve: string;
            };
            __Unused4: string;
            disapprove_proposal: {
                proposalHash: string;
            };
            close: {
                proposalHash: string;
                index: string;
                proposalWeightBound: string;
                lengthBound: string;
            };
        };
    };
    /**
     * Lookup324: pallet_treasury::pallet::Call<T, I>
     **/
    PalletTreasuryCall: {
        _enum: {
            propose_spend: {
                value: string;
                beneficiary: string;
            };
            reject_proposal: {
                proposalId: string;
            };
            approve_proposal: {
                proposalId: string;
            };
            spend: {
                amount: string;
                beneficiary: string;
            };
            remove_approval: {
                proposalId: string;
            };
        };
    };
    /**
     * Lookup325: pallet_preimage::pallet::Call<T>
     **/
    PalletPreimageCall: {
        _enum: {
            note_preimage: {
                bytes: string;
            };
            unnote_preimage: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            request_preimage: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            unrequest_preimage: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
        };
    };
    /**
     * Lookup326: pallet_sudo::pallet::Call<T>
     **/
    PalletSudoCall: {
        _enum: {
            sudo: {
                call: string;
            };
            sudo_unchecked_weight: {
                call: string;
                weight: string;
            };
            set_key: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            sudo_as: {
                who: string;
                call: string;
            };
        };
    };
    /**
     * Lookup327: pallet_static_price_provider::pallet::Call<T>
     **/
    PalletStaticPriceProviderCall: {
        _enum: {
            force_set_price: {
                price: string;
            };
        };
    };
    /**
     * Lookup328: shibuya_runtime::OriginCaller
     **/
    ShibuyaRuntimeOriginCaller: {
        _enum: {
            __Unused0: string;
            __Unused1: string;
            __Unused2: string;
            __Unused3: string;
            __Unused4: string;
            __Unused5: string;
            __Unused6: string;
            Void: string;
            __Unused8: string;
            __Unused9: string;
            system: string;
            __Unused11: string;
            __Unused12: string;
            __Unused13: string;
            __Unused14: string;
            __Unused15: string;
            __Unused16: string;
            __Unused17: string;
            __Unused18: string;
            __Unused19: string;
            __Unused20: string;
            __Unused21: string;
            __Unused22: string;
            __Unused23: string;
            __Unused24: string;
            __Unused25: string;
            __Unused26: string;
            __Unused27: string;
            __Unused28: string;
            __Unused29: string;
            __Unused30: string;
            __Unused31: string;
            __Unused32: string;
            __Unused33: string;
            __Unused34: string;
            __Unused35: string;
            __Unused36: string;
            __Unused37: string;
            __Unused38: string;
            __Unused39: string;
            __Unused40: string;
            __Unused41: string;
            __Unused42: string;
            __Unused43: string;
            __Unused44: string;
            __Unused45: string;
            __Unused46: string;
            __Unused47: string;
            __Unused48: string;
            __Unused49: string;
            __Unused50: string;
            PolkadotXcm: string;
            CumulusXcm: string;
            __Unused53: string;
            __Unused54: string;
            __Unused55: string;
            __Unused56: string;
            __Unused57: string;
            __Unused58: string;
            __Unused59: string;
            __Unused60: string;
            Ethereum: string;
            __Unused62: string;
            __Unused63: string;
            EthereumChecked: string;
            __Unused65: string;
            __Unused66: string;
            __Unused67: string;
            __Unused68: string;
            __Unused69: string;
            __Unused70: string;
            __Unused71: string;
            __Unused72: string;
            __Unused73: string;
            __Unused74: string;
            __Unused75: string;
            __Unused76: string;
            __Unused77: string;
            __Unused78: string;
            __Unused79: string;
            __Unused80: string;
            Council: string;
            TechnicalCommittee: string;
        };
    };
    /**
     * Lookup329: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
     **/
    FrameSupportDispatchRawOrigin: {
        _enum: {
            Root: string;
            Signed: string;
            None: string;
        };
    };
    /**
     * Lookup330: pallet_xcm::pallet::Origin
     **/
    PalletXcmOrigin: {
        _enum: {
            Xcm: string;
            Response: string;
        };
    };
    /**
     * Lookup331: cumulus_pallet_xcm::pallet::Origin
     **/
    CumulusPalletXcmOrigin: {
        _enum: {
            Relay: string;
            SiblingParachain: string;
        };
    };
    /**
     * Lookup332: pallet_ethereum::RawOrigin
     **/
    PalletEthereumRawOrigin: {
        _enum: {
            EthereumTransaction: string;
        };
    };
    /**
     * Lookup333: pallet_ethereum_checked::RawOrigin<sp_core::crypto::AccountId32>
     **/
    PalletEthereumCheckedRawOrigin: {
        _enum: {
            XcmEthereumTx: string;
        };
    };
    /**
     * Lookup334: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
     **/
    PalletCollectiveRawOrigin: {
        _enum: {
            Members: string;
            Member: string;
            _Phantom: string;
        };
    };
    /**
     * Lookup336: sp_core::Void
     **/
    SpCoreVoid: string;
    /**
     * Lookup337: pallet_utility::pallet::Error<T>
     **/
    PalletUtilityError: {
        _enum: string[];
    };
    /**
     * Lookup338: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
     **/
    PalletIdentityRegistration: {
        judgements: string;
        deposit: string;
        info: string;
    };
    /**
     * Lookup346: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
     **/
    PalletIdentityRegistrarInfo: {
        account: string;
        fee: string;
        fields: string;
    };
    /**
     * Lookup348: pallet_identity::pallet::Error<T>
     **/
    PalletIdentityError: {
        _enum: string[];
    };
    /**
     * Lookup350: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
     **/
    PalletMultisigMultisig: {
        when: string;
        deposit: string;
        depositor: string;
        approvals: string;
    };
    /**
     * Lookup352: pallet_multisig::pallet::Error<T>
     **/
    PalletMultisigError: {
        _enum: string[];
    };
    /**
     * Lookup356: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<shibuya_runtime::RuntimeCall>, BlockNumber, shibuya_runtime::OriginCaller, sp_core::crypto::AccountId32>
     **/
    PalletSchedulerScheduled: {
        maybeId: string;
        priority: string;
        call: string;
        maybePeriodic: string;
        origin: string;
    };
    /**
     * Lookup358: pallet_scheduler::pallet::Error<T>
     **/
    PalletSchedulerError: {
        _enum: string[];
    };
    /**
     * Lookup361: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, shibuya_runtime::ProxyType, BlockNumber>
     **/
    PalletProxyProxyDefinition: {
        delegate: string;
        proxyType: string;
        delay: string;
    };
    /**
     * Lookup365: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
     **/
    PalletProxyAnnouncement: {
        real: string;
        callHash: string;
        height: string;
    };
    /**
     * Lookup367: pallet_proxy::pallet::Error<T>
     **/
    PalletProxyError: {
        _enum: string[];
    };
    /**
     * Lookup369: polkadot_primitives::v4::UpgradeRestriction
     **/
    PolkadotPrimitivesV4UpgradeRestriction: {
        _enum: string[];
    };
    /**
     * Lookup370: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
     **/
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
        dmqMqcHead: string;
        relayDispatchQueueSize: string;
        ingressChannels: string;
        egressChannels: string;
    };
    /**
     * Lookup371: cumulus_pallet_parachain_system::relay_state_snapshot::RelayDispachQueueSize
     **/
    CumulusPalletParachainSystemRelayStateSnapshotRelayDispachQueueSize: {
        remainingCount: string;
        remainingSize: string;
    };
    /**
     * Lookup374: polkadot_primitives::v4::AbridgedHrmpChannel
     **/
    PolkadotPrimitivesV4AbridgedHrmpChannel: {
        maxCapacity: string;
        maxTotalSize: string;
        maxMessageSize: string;
        msgCount: string;
        totalSize: string;
        mqcHead: string;
    };
    /**
     * Lookup375: polkadot_primitives::v4::AbridgedHostConfiguration
     **/
    PolkadotPrimitivesV4AbridgedHostConfiguration: {
        maxCodeSize: string;
        maxHeadDataSize: string;
        maxUpwardQueueCount: string;
        maxUpwardQueueSize: string;
        maxUpwardMessageSize: string;
        maxUpwardMessageNumPerCandidate: string;
        hrmpMaxMessageNumPerCandidate: string;
        validationUpgradeCooldown: string;
        validationUpgradeDelay: string;
    };
    /**
     * Lookup381: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
     **/
    PolkadotCorePrimitivesOutboundHrmpMessage: {
        recipient: string;
        data: string;
    };
    /**
     * Lookup382: cumulus_pallet_parachain_system::CodeUpgradeAuthorization<T>
     **/
    CumulusPalletParachainSystemCodeUpgradeAuthorization: {
        codeHash: string;
        checkVersion: string;
    };
    /**
     * Lookup383: cumulus_pallet_parachain_system::pallet::Error<T>
     **/
    CumulusPalletParachainSystemError: {
        _enum: string[];
    };
    /**
     * Lookup385: pallet_transaction_payment::Releases
     **/
    PalletTransactionPaymentReleases: {
        _enum: string[];
    };
    /**
     * Lookup387: pallet_balances::types::BalanceLock<Balance>
     **/
    PalletBalancesBalanceLock: {
        id: string;
        amount: string;
        reasons: string;
    };
    /**
     * Lookup388: pallet_balances::types::Reasons
     **/
    PalletBalancesReasons: {
        _enum: string[];
    };
    /**
     * Lookup391: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
     **/
    PalletBalancesReserveData: {
        id: string;
        amount: string;
    };
    /**
     * Lookup397: pallet_balances::types::IdAmount<shibuya_runtime::RuntimeFreezeReason, Balance>
     **/
    PalletBalancesIdAmount: {
        id: string;
        amount: string;
    };
    /**
     * Lookup398: shibuya_runtime::RuntimeFreezeReason
     **/
    ShibuyaRuntimeRuntimeFreezeReason: {
        _enum: {
            __Unused0: string;
            __Unused1: string;
            __Unused2: string;
            __Unused3: string;
            __Unused4: string;
            __Unused5: string;
            __Unused6: string;
            __Unused7: string;
            __Unused8: string;
            __Unused9: string;
            __Unused10: string;
            __Unused11: string;
            __Unused12: string;
            __Unused13: string;
            __Unused14: string;
            __Unused15: string;
            __Unused16: string;
            __Unused17: string;
            __Unused18: string;
            __Unused19: string;
            __Unused20: string;
            __Unused21: string;
            __Unused22: string;
            __Unused23: string;
            __Unused24: string;
            __Unused25: string;
            __Unused26: string;
            __Unused27: string;
            __Unused28: string;
            __Unused29: string;
            __Unused30: string;
            __Unused31: string;
            __Unused32: string;
            __Unused33: string;
            DappStaking: string;
        };
    };
    /**
     * Lookup399: pallet_dapp_staking_v3::pallet::FreezeReason
     **/
    PalletDappStakingV3FreezeReason: {
        _enum: string[];
    };
    /**
     * Lookup401: pallet_balances::pallet::Error<T, I>
     **/
    PalletBalancesError: {
        _enum: string[];
    };
    /**
     * Lookup404: pallet_vesting::Releases
     **/
    PalletVestingReleases: {
        _enum: string[];
    };
    /**
     * Lookup405: pallet_vesting::pallet::Error<T>
     **/
    PalletVestingError: {
        _enum: string[];
    };
    /**
     * Lookup406: pallet_dapp_staking_v3::types::ProtocolState
     **/
    PalletDappStakingV3ProtocolState: {
        era: string;
        nextEraStart: string;
        periodInfo: string;
        maintenance: string;
    };
    /**
     * Lookup407: pallet_dapp_staking_v3::types::PeriodInfo
     **/
    PalletDappStakingV3PeriodInfo: {
        number: string;
        subperiod: string;
        nextSubperiodStartEra: string;
    };
    /**
     * Lookup408: pallet_dapp_staking_v3::types::DAppInfo<sp_core::crypto::AccountId32>
     **/
    PalletDappStakingV3DAppInfo: {
        owner: string;
        id: string;
        state: string;
        rewardBeneficiary: string;
    };
    /**
     * Lookup409: pallet_dapp_staking_v3::types::DAppState
     **/
    PalletDappStakingV3DAppState: {
        _enum: {
            Registered: string;
            Unregistered: string;
        };
    };
    /**
     * Lookup410: pallet_dapp_staking_v3::types::AccountLedger<UnlockingLen>
     **/
    PalletDappStakingV3AccountLedger: {
        locked: string;
        unlocking: string;
        staked: string;
        stakedFuture: string;
        contractStakeCount: string;
    };
    /**
     * Lookup412: pallet_dapp_staking_v3::types::UnlockingChunk
     **/
    PalletDappStakingV3UnlockingChunk: {
        amount: string;
        unlockBlock: string;
    };
    /**
     * Lookup414: pallet_dapp_staking_v3::types::StakeAmount
     **/
    PalletDappStakingV3StakeAmount: {
        voting: string;
        buildAndEarn: string;
        era: string;
        period: string;
    };
    /**
     * Lookup417: pallet_dapp_staking_v3::types::SingularStakingInfo
     **/
    PalletDappStakingV3SingularStakingInfo: {
        staked: string;
        loyalStaker: string;
    };
    /**
     * Lookup418: pallet_dapp_staking_v3::types::ContractStakeAmount
     **/
    PalletDappStakingV3ContractStakeAmount: {
        staked: string;
        stakedFuture: string;
    };
    /**
     * Lookup419: pallet_dapp_staking_v3::types::EraInfo
     **/
    PalletDappStakingV3EraInfo: {
        totalLocked: string;
        unlocking: string;
        currentStakeAmount: string;
        nextStakeAmount: string;
    };
    /**
     * Lookup420: pallet_dapp_staking_v3::types::EraRewardSpan<SL>
     **/
    PalletDappStakingV3EraRewardSpan: {
        span: string;
        firstEra: string;
        lastEra: string;
    };
    /**
     * Lookup422: pallet_dapp_staking_v3::types::EraReward
     **/
    PalletDappStakingV3EraReward: {
        stakerRewardPool: string;
        staked: string;
        dappRewardPool: string;
    };
    /**
     * Lookup424: pallet_dapp_staking_v3::types::PeriodEndInfo
     **/
    PalletDappStakingV3PeriodEndInfo: {
        bonusRewardPool: string;
        totalVpStake: string;
        finalEra: string;
    };
    /**
     * Lookup425: pallet_dapp_staking_v3::types::DAppTierRewards<MD, NT>
     **/
    PalletDappStakingV3DAppTierRewards: {
        dapps: string;
        rewards: string;
        period: string;
    };
    /**
     * Lookup432: pallet_dapp_staking_v3::types::CleanupMarker
     **/
    PalletDappStakingV3CleanupMarker: {
        eraRewardIndex: string;
        dappTiersIndex: string;
        oldestValidEra: string;
    };
    /**
     * Lookup433: pallet_dapp_staking_v3::pallet::Error<T>
     **/
    PalletDappStakingV3Error: {
        _enum: string[];
    };
    /**
     * Lookup434: pallet_inflation::pallet::Error<T>
     **/
    PalletInflationError: {
        _enum: string[];
    };
    /**
     * Lookup435: pallet_assets::types::AssetDetails<Balance, sp_core::crypto::AccountId32, DepositBalance>
     **/
    PalletAssetsAssetDetails: {
        owner: string;
        issuer: string;
        admin: string;
        freezer: string;
        supply: string;
        deposit: string;
        minBalance: string;
        isSufficient: string;
        accounts: string;
        sufficients: string;
        approvals: string;
        status: string;
    };
    /**
     * Lookup436: pallet_assets::types::AssetStatus
     **/
    PalletAssetsAssetStatus: {
        _enum: string[];
    };
    /**
     * Lookup438: pallet_assets::types::AssetAccount<Balance, DepositBalance, Extra, sp_core::crypto::AccountId32>
     **/
    PalletAssetsAssetAccount: {
        balance: string;
        status: string;
        reason: string;
        extra: string;
    };
    /**
     * Lookup439: pallet_assets::types::AccountStatus
     **/
    PalletAssetsAccountStatus: {
        _enum: string[];
    };
    /**
     * Lookup440: pallet_assets::types::ExistenceReason<Balance, sp_core::crypto::AccountId32>
     **/
    PalletAssetsExistenceReason: {
        _enum: {
            Consumer: string;
            Sufficient: string;
            DepositHeld: string;
            DepositRefunded: string;
            DepositFrom: string;
        };
    };
    /**
     * Lookup442: pallet_assets::types::Approval<Balance, DepositBalance>
     **/
    PalletAssetsApproval: {
        amount: string;
        deposit: string;
    };
    /**
     * Lookup443: pallet_assets::types::AssetMetadata<DepositBalance, bounded_collections::bounded_vec::BoundedVec<T, S>>
     **/
    PalletAssetsAssetMetadata: {
        deposit: string;
        name: string;
        symbol: string;
        decimals: string;
        isFrozen: string;
    };
    /**
     * Lookup445: pallet_assets::pallet::Error<T, I>
     **/
    PalletAssetsError: {
        _enum: string[];
    };
    /**
     * Lookup447: pallet_collator_selection::pallet::CandidateInfo<sp_core::crypto::AccountId32, Balance>
     **/
    PalletCollatorSelectionCandidateInfo: {
        who: string;
        deposit: string;
    };
    /**
     * Lookup448: pallet_collator_selection::pallet::Error<T>
     **/
    PalletCollatorSelectionError: {
        _enum: string[];
    };
    /**
     * Lookup453: sp_core::crypto::KeyTypeId
     **/
    SpCoreCryptoKeyTypeId: string;
    /**
     * Lookup454: pallet_session::pallet::Error<T>
     **/
    PalletSessionError: {
        _enum: string[];
    };
    /**
     * Lookup459: cumulus_pallet_xcmp_queue::InboundChannelDetails
     **/
    CumulusPalletXcmpQueueInboundChannelDetails: {
        sender: string;
        state: string;
        messageMetadata: string;
    };
    /**
     * Lookup460: cumulus_pallet_xcmp_queue::InboundState
     **/
    CumulusPalletXcmpQueueInboundState: {
        _enum: string[];
    };
    /**
     * Lookup463: polkadot_parachain::primitives::XcmpMessageFormat
     **/
    PolkadotParachainPrimitivesXcmpMessageFormat: {
        _enum: string[];
    };
    /**
     * Lookup466: cumulus_pallet_xcmp_queue::OutboundChannelDetails
     **/
    CumulusPalletXcmpQueueOutboundChannelDetails: {
        recipient: string;
        state: string;
        signalsExist: string;
        firstIndex: string;
        lastIndex: string;
    };
    /**
     * Lookup467: cumulus_pallet_xcmp_queue::OutboundState
     **/
    CumulusPalletXcmpQueueOutboundState: {
        _enum: string[];
    };
    /**
     * Lookup469: cumulus_pallet_xcmp_queue::QueueConfigData
     **/
    CumulusPalletXcmpQueueQueueConfigData: {
        suspendThreshold: string;
        dropThreshold: string;
        resumeThreshold: string;
        thresholdWeight: string;
        weightRestrictDecay: string;
        xcmpMaxIndividualWeight: string;
    };
    /**
     * Lookup471: cumulus_pallet_xcmp_queue::pallet::Error<T>
     **/
    CumulusPalletXcmpQueueError: {
        _enum: string[];
    };
    /**
     * Lookup472: pallet_xcm::pallet::QueryStatus<BlockNumber>
     **/
    PalletXcmQueryStatus: {
        _enum: {
            Pending: {
                responder: string;
                maybeMatchQuerier: string;
                maybeNotify: string;
                timeout: string;
            };
            VersionNotifier: {
                origin: string;
                isActive: string;
            };
            Ready: {
                response: string;
                at: string;
            };
        };
    };
    /**
     * Lookup476: xcm::VersionedResponse
     **/
    XcmVersionedResponse: {
        _enum: {
            __Unused0: string;
            __Unused1: string;
            V2: string;
            V3: string;
        };
    };
    /**
     * Lookup482: pallet_xcm::pallet::VersionMigrationStage
     **/
    PalletXcmVersionMigrationStage: {
        _enum: {
            MigrateSupportedVersion: string;
            MigrateVersionNotifiers: string;
            NotifyCurrentTargets: string;
            MigrateAndNotifyOldTargets: string;
        };
    };
    /**
     * Lookup485: xcm::VersionedAssetId
     **/
    XcmVersionedAssetId: {
        _enum: {
            __Unused0: string;
            __Unused1: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup486: pallet_xcm::pallet::RemoteLockedFungibleRecord<ConsumerIdentifier, MaxConsumers>
     **/
    PalletXcmRemoteLockedFungibleRecord: {
        amount: string;
        owner: string;
        locker: string;
        consumers: string;
    };
    /**
     * Lookup493: pallet_xcm::pallet::Error<T>
     **/
    PalletXcmError: {
        _enum: string[];
    };
    /**
     * Lookup494: cumulus_pallet_xcm::pallet::Error<T>
     **/
    CumulusPalletXcmError: string;
    /**
     * Lookup495: cumulus_pallet_dmp_queue::ConfigData
     **/
    CumulusPalletDmpQueueConfigData: {
        maxIndividual: string;
    };
    /**
     * Lookup496: cumulus_pallet_dmp_queue::PageIndexData
     **/
    CumulusPalletDmpQueuePageIndexData: {
        beginUsed: string;
        endUsed: string;
        overweightCount: string;
    };
    /**
     * Lookup499: cumulus_pallet_dmp_queue::pallet::Error<T>
     **/
    CumulusPalletDmpQueueError: {
        _enum: string[];
    };
    /**
     * Lookup500: pallet_xc_asset_config::pallet::Error<T>
     **/
    PalletXcAssetConfigError: {
        _enum: string[];
    };
    /**
     * Lookup501: orml_xtokens::module::Error<T>
     **/
    OrmlXtokensModuleError: {
        _enum: string[];
    };
    /**
     * Lookup502: pallet_evm::CodeMetadata
     **/
    PalletEvmCodeMetadata: {
        _alias: {
            size_: string;
            hash_: string;
        };
        size_: string;
        hash_: string;
    };
    /**
     * Lookup504: pallet_evm::pallet::Error<T>
     **/
    PalletEvmError: {
        _enum: string[];
    };
    /**
     * Lookup507: fp_rpc::TransactionStatus
     **/
    FpRpcTransactionStatus: {
        transactionHash: string;
        transactionIndex: string;
        from: string;
        to: string;
        contractAddress: string;
        logs: string;
        logsBloom: string;
    };
    /**
     * Lookup510: ethbloom::Bloom
     **/
    EthbloomBloom: string;
    /**
     * Lookup512: ethereum::receipt::ReceiptV3
     **/
    EthereumReceiptReceiptV3: {
        _enum: {
            Legacy: string;
            EIP2930: string;
            EIP1559: string;
        };
    };
    /**
     * Lookup513: ethereum::receipt::EIP658ReceiptData
     **/
    EthereumReceiptEip658ReceiptData: {
        statusCode: string;
        usedGas: string;
        logsBloom: string;
        logs: string;
    };
    /**
     * Lookup514: ethereum::block::Block<ethereum::transaction::TransactionV2>
     **/
    EthereumBlock: {
        header: string;
        transactions: string;
        ommers: string;
    };
    /**
     * Lookup515: ethereum::header::Header
     **/
    EthereumHeader: {
        parentHash: string;
        ommersHash: string;
        beneficiary: string;
        stateRoot: string;
        transactionsRoot: string;
        receiptsRoot: string;
        logsBloom: string;
        difficulty: string;
        number: string;
        gasLimit: string;
        gasUsed: string;
        timestamp: string;
        extraData: string;
        mixHash: string;
        nonce: string;
    };
    /**
     * Lookup516: ethereum_types::hash::H64
     **/
    EthereumTypesHashH64: string;
    /**
     * Lookup521: pallet_ethereum::pallet::Error<T>
     **/
    PalletEthereumError: {
        _enum: string[];
    };
    /**
     * Lookup522: pallet_dynamic_evm_base_fee::pallet::Error<T>
     **/
    PalletDynamicEvmBaseFeeError: {
        _enum: string[];
    };
    /**
     * Lookup523: pallet_unified_accounts::pallet::Error<T>
     **/
    PalletUnifiedAccountsError: {
        _enum: string[];
    };
    /**
     * Lookup525: pallet_contracts::wasm::PrefabWasmModule<T>
     **/
    PalletContractsWasmPrefabWasmModule: {
        instructionWeightsVersion: string;
        initial: string;
        maximum: string;
        code: string;
        determinism: string;
    };
    /**
     * Lookup527: pallet_contracts::wasm::OwnerInfo<T>
     **/
    PalletContractsWasmOwnerInfo: {
        owner: string;
        deposit: string;
        refcount: string;
    };
    /**
     * Lookup528: pallet_contracts::storage::ContractInfo<T>
     **/
    PalletContractsStorageContractInfo: {
        trieId: string;
        depositAccount: string;
        codeHash: string;
        storageBytes: string;
        storageItems: string;
        storageByteDeposit: string;
        storageItemDeposit: string;
        storageBaseDeposit: string;
    };
    /**
     * Lookup530: pallet_contracts::storage::DeletionQueueManager<T>
     **/
    PalletContractsStorageDeletionQueueManager: {
        insertCounter: string;
        deleteCounter: string;
    };
    /**
     * Lookup532: pallet_contracts::schedule::Schedule<T>
     **/
    PalletContractsSchedule: {
        limits: string;
        instructionWeights: string;
        hostFnWeights: string;
    };
    /**
     * Lookup533: pallet_contracts::schedule::Limits
     **/
    PalletContractsScheduleLimits: {
        eventTopics: string;
        globals: string;
        locals: string;
        parameters: string;
        memoryPages: string;
        tableSize: string;
        brTableSize: string;
        subjectLen: string;
        payloadLen: string;
        runtimeMemory: string;
    };
    /**
     * Lookup534: pallet_contracts::schedule::InstructionWeights<T>
     **/
    PalletContractsScheduleInstructionWeights: {
        _alias: {
            r_if: string;
        };
        version: string;
        fallback: string;
        i64const: string;
        i64load: string;
        i64store: string;
        select: string;
        r_if: string;
        br: string;
        brIf: string;
        brTable: string;
        brTablePerEntry: string;
        call: string;
        callIndirect: string;
        callPerLocal: string;
        localGet: string;
        localSet: string;
        localTee: string;
        globalGet: string;
        globalSet: string;
        memoryCurrent: string;
        memoryGrow: string;
        i64clz: string;
        i64ctz: string;
        i64popcnt: string;
        i64eqz: string;
        i64extendsi32: string;
        i64extendui32: string;
        i32wrapi64: string;
        i64eq: string;
        i64ne: string;
        i64lts: string;
        i64ltu: string;
        i64gts: string;
        i64gtu: string;
        i64les: string;
        i64leu: string;
        i64ges: string;
        i64geu: string;
        i64add: string;
        i64sub: string;
        i64mul: string;
        i64divs: string;
        i64divu: string;
        i64rems: string;
        i64remu: string;
        i64and: string;
        i64or: string;
        i64xor: string;
        i64shl: string;
        i64shrs: string;
        i64shru: string;
        i64rotl: string;
        i64rotr: string;
    };
    /**
     * Lookup535: pallet_contracts::schedule::HostFnWeights<T>
     **/
    PalletContractsScheduleHostFnWeights: {
        _alias: {
            r_return: string;
        };
        caller: string;
        isContract: string;
        codeHash: string;
        ownCodeHash: string;
        callerIsOrigin: string;
        callerIsRoot: string;
        address: string;
        gasLeft: string;
        balance: string;
        valueTransferred: string;
        minimumBalance: string;
        blockNumber: string;
        now: string;
        weightToFee: string;
        gas: string;
        input: string;
        inputPerByte: string;
        r_return: string;
        returnPerByte: string;
        terminate: string;
        random: string;
        depositEvent: string;
        depositEventPerTopic: string;
        depositEventPerByte: string;
        debugMessage: string;
        debugMessagePerByte: string;
        setStorage: string;
        setStoragePerNewByte: string;
        setStoragePerOldByte: string;
        setCodeHash: string;
        clearStorage: string;
        clearStoragePerByte: string;
        containsStorage: string;
        containsStoragePerByte: string;
        getStorage: string;
        getStoragePerByte: string;
        takeStorage: string;
        takeStoragePerByte: string;
        transfer: string;
        call: string;
        delegateCall: string;
        callTransferSurcharge: string;
        callPerClonedByte: string;
        instantiate: string;
        instantiateTransferSurcharge: string;
        instantiatePerInputByte: string;
        instantiatePerSaltByte: string;
        hashSha2256: string;
        hashSha2256PerByte: string;
        hashKeccak256: string;
        hashKeccak256PerByte: string;
        hashBlake2256: string;
        hashBlake2256PerByte: string;
        hashBlake2128: string;
        hashBlake2128PerByte: string;
        ecdsaRecover: string;
        ecdsaToEthAddress: string;
        sr25519Verify: string;
        sr25519VerifyPerByte: string;
        reentranceCount: string;
        accountReentranceCount: string;
        instantiationNonce: string;
    };
    /**
     * Lookup536: pallet_contracts::pallet::Error<T>
     **/
    PalletContractsError: {
        _enum: string[];
    };
    /**
     * Lookup541: pallet_democracy::types::ReferendumInfo<BlockNumber, frame_support::traits::preimages::Bounded<shibuya_runtime::RuntimeCall>, Balance>
     **/
    PalletDemocracyReferendumInfo: {
        _enum: {
            Ongoing: string;
            Finished: {
                approved: string;
                end: string;
            };
        };
    };
    /**
     * Lookup542: pallet_democracy::types::ReferendumStatus<BlockNumber, frame_support::traits::preimages::Bounded<shibuya_runtime::RuntimeCall>, Balance>
     **/
    PalletDemocracyReferendumStatus: {
        end: string;
        proposal: string;
        threshold: string;
        delay: string;
        tally: string;
    };
    /**
     * Lookup543: pallet_democracy::types::Tally<Balance>
     **/
    PalletDemocracyTally: {
        ayes: string;
        nays: string;
        turnout: string;
    };
    /**
     * Lookup544: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
     **/
    PalletDemocracyVoteVoting: {
        _enum: {
            Direct: {
                votes: string;
                delegations: string;
                prior: string;
            };
            Delegating: {
                balance: string;
                target: string;
                conviction: string;
                delegations: string;
                prior: string;
            };
        };
    };
    /**
     * Lookup548: pallet_democracy::types::Delegations<Balance>
     **/
    PalletDemocracyDelegations: {
        votes: string;
        capital: string;
    };
    /**
     * Lookup549: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
     **/
    PalletDemocracyVotePriorLock: string;
    /**
     * Lookup552: pallet_democracy::pallet::Error<T>
     **/
    PalletDemocracyError: {
        _enum: string[];
    };
    /**
     * Lookup554: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletCollectiveVotes: {
        index: string;
        threshold: string;
        ayes: string;
        nays: string;
        end: string;
    };
    /**
     * Lookup555: pallet_collective::pallet::Error<T, I>
     **/
    PalletCollectiveError: {
        _enum: string[];
    };
    /**
     * Lookup557: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
     **/
    PalletTreasuryProposal: {
        proposer: string;
        value: string;
        beneficiary: string;
        bond: string;
    };
    /**
     * Lookup560: frame_support::PalletId
     **/
    FrameSupportPalletId: string;
    /**
     * Lookup561: pallet_treasury::pallet::Error<T, I>
     **/
    PalletTreasuryError: {
        _enum: string[];
    };
    /**
     * Lookup562: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
     **/
    PalletPreimageRequestStatus: {
        _enum: {
            Unrequested: {
                deposit: string;
                len: string;
            };
            Requested: {
                deposit: string;
                count: string;
                len: string;
            };
        };
    };
    /**
     * Lookup567: pallet_preimage::pallet::Error<T>
     **/
    PalletPreimageError: {
        _enum: string[];
    };
    /**
     * Lookup568: pallet_sudo::pallet::Error<T>
     **/
    PalletSudoError: {
        _enum: string[];
    };
    /**
     * Lookup569: pallet_static_price_provider::pallet::Error<T>
     **/
    PalletStaticPriceProviderError: {
        _enum: string[];
    };
    /**
     * Lookup571: sp_runtime::MultiSignature
     **/
    SpRuntimeMultiSignature: {
        _enum: {
            Ed25519: string;
            Sr25519: string;
            Ecdsa: string;
        };
    };
    /**
     * Lookup572: sp_core::ed25519::Signature
     **/
    SpCoreEd25519Signature: string;
    /**
     * Lookup574: sp_core::sr25519::Signature
     **/
    SpCoreSr25519Signature: string;
    /**
     * Lookup575: sp_core::ecdsa::Signature
     **/
    SpCoreEcdsaSignature: string;
    /**
     * Lookup577: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
     **/
    FrameSystemExtensionsCheckSpecVersion: string;
    /**
     * Lookup578: frame_system::extensions::check_tx_version::CheckTxVersion<T>
     **/
    FrameSystemExtensionsCheckTxVersion: string;
    /**
     * Lookup579: frame_system::extensions::check_genesis::CheckGenesis<T>
     **/
    FrameSystemExtensionsCheckGenesis: string;
    /**
     * Lookup582: frame_system::extensions::check_nonce::CheckNonce<T>
     **/
    FrameSystemExtensionsCheckNonce: string;
    /**
     * Lookup583: frame_system::extensions::check_weight::CheckWeight<T>
     **/
    FrameSystemExtensionsCheckWeight: string;
    /**
     * Lookup584: pallet_transaction_payment::ChargeTransactionPayment<T>
     **/
    PalletTransactionPaymentChargeTransactionPayment: string;
};
export default _default;
