import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { 
  Wallet, 
  Shield, 
  CheckCircle2, 
  ExternalLink,
  Copy,
  LogOut,
  AlertCircle
} from "lucide-react";

interface WalletConnectProps {
  isOpen: boolean;
  onClose: () => void;
  onWalletConnect: (wallet: WalletInfo) => void;
  connectedWallet: WalletInfo | null;
}

interface WalletInfo {
  name: string;
  address: string;
  balance: number;
  icon: string;
}

export function WalletConnect({ isOpen, onClose, onWalletConnect, connectedWallet }: WalletConnectProps) {
  const [isConnecting, setIsConnecting] = useState<string | null>(null);
  const [showWalletDetails, setShowWalletDetails] = useState(false);

  const wallets = [
    {
      name: "Yoroi",
      description: "Light wallet for Cardano with advanced features",
      icon: "🦊",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      supported: true
    },
    {
      name: "Begin Wallet",
      description: "Simple and secure Cardano wallet",
      icon: "🚀",
      color: "bg-green-50 border-green-200 hover:bg-green-100",
      buttonColor: "bg-green-600 hover:bg-green-700",
      supported: true
    },
    {
      name: "Nami",
      description: "Browser extension wallet for Cardano",
      icon: "🌊",
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      supported: true
    }
  ];

  const handleWalletConnect = async (walletName: string) => {
    setIsConnecting(walletName);
    
    // Simulate wallet connection
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock wallet data
    const mockWallet: WalletInfo = {
      name: walletName,
      address: `addr1qx${Math.random().toString(36).substring(2, 50)}`,
      balance: Math.floor(Math.random() * 10000) + 1000,
      icon: wallets.find(w => w.name === walletName)?.icon || "💳"
    };
    
    onWalletConnect(mockWallet);
    setIsConnecting(null);
    onClose();
  };

  const copyAddress = () => {
    if (connectedWallet) {
      navigator.clipboard.writeText(connectedWallet.address);
      // In a real app, show a toast notification
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 10)}...${address.slice(-8)}`;
  };

  const formatBalance = (balance: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(balance);
  };

  if (connectedWallet && showWalletDetails) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span className="text-2xl">{connectedWallet.icon}</span>
              Wallet Details
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-6xl mb-4">{connectedWallet.icon}</div>
              <h3 className="text-xl text-gray-900 mb-2">{connectedWallet.name}</h3>
              <Badge className="bg-green-100 text-green-800">Connected</Badge>
            </div>

            <Card className="bg-gray-50">
              <CardContent className="py-4">
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-600">Wallet Address</label>
                    <div className="flex items-center gap-2 mt-1">
                      <code className="text-sm bg-white px-2 py-1 rounded flex-1">
                        {formatAddress(connectedWallet.address)}
                      </code>
                      <Button size="sm" variant="ghost" onClick={copyAddress}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-600">ADA Balance</label>
                    <div className="text-2xl text-gray-900 font-mono">
                      ₳{formatBalance(connectedWallet.balance)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="text-blue-900 mb-1">Secure Connection</h4>
                  <p className="text-sm text-blue-700">
                    Your wallet is securely connected to HealthCred. All transactions are encrypted and verified on the Cardano blockchain.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setShowWalletDetails(false)}
              >
                Close
              </Button>
              <Button 
                variant="destructive" 
                className="flex-1"
                onClick={() => {
                  onWalletConnect(null as any);
                  setShowWalletDetails(false);
                  onClose();
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Disconnect
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            {connectedWallet ? 'Wallet Connected' : 'Connect Your Cardano Wallet'}
          </DialogTitle>
        </DialogHeader>
        
        {connectedWallet ? (
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-6xl mb-4">{connectedWallet.icon}</div>
              <h3 className="text-xl text-gray-900 mb-2">{connectedWallet.name}</h3>
              <Badge className="bg-green-100 text-green-800 mb-4">Connected</Badge>
              <p className="text-gray-600">
                Address: {formatAddress(connectedWallet.address)}
              </p>
              <p className="text-lg text-gray-900 mt-2">
                Balance: ₳{formatBalance(connectedWallet.balance)}
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <div>
                  <h4 className="text-green-800">Ready for HealthCred!</h4>
                  <p className="text-sm text-green-700">
                    Your wallet is connected and ready to store health records on the blockchain.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                className="flex-1 bg-green-600 hover:bg-green-700"
                onClick={onClose}
              >
                Continue to Dashboard
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowWalletDetails(true)}
              >
                View Details
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-gray-600 text-center">
              Connect your Cardano wallet to securely store and manage your health records on the blockchain.
            </p>

            <div className="space-y-3">
              {wallets.map((wallet) => (
                <Card 
                  key={wallet.name} 
                  className={`cursor-pointer transition-colors ${wallet.color}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{wallet.icon}</div>
                        <div>
                          <h4 className="text-gray-900">{wallet.name}</h4>
                          <p className="text-sm text-gray-600">{wallet.description}</p>
                          {!wallet.supported && (
                            <Badge variant="secondary" className="mt-1">
                              Coming Soon
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <Button
                        className={wallet.buttonColor}
                        disabled={!wallet.supported || isConnecting === wallet.name}
                        onClick={() => handleWalletConnect(wallet.name)}
                      >
                        {isConnecting === wallet.name ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                            Connecting...
                          </>
                        ) : (
                          'Connect'
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="text-yellow-800 mb-1">Wallet Required</h4>
                  <p className="text-sm text-yellow-700">
                    Don't have a Cardano wallet? Download one of the supported wallets above to get started.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Button variant="ghost" size="sm" className="text-yellow-700 hover:text-yellow-800 p-0">
                      Learn more <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}