import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, PhoneOff, Mic, MicOff } from "lucide-react";
import { toast } from "sonner";
import { RetellWebClient } from "retell-client-js-sdk";

const RetellVoiceChat = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const retellClientRef = useRef<RetellWebClient | null>(null);

  const startCall = async () => {
    setIsConnecting(true);
    
    try {
      console.log("Requesting access token from backend...");
      
      // Request access token from backend
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-retell-call`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to create call:", errorData);
        throw new Error(errorData.error || "Failed to create call");
      }

      const { access_token, call_id } = await response.json();
      console.log("Access token received, call_id:", call_id);

      // Initialize Retell client
      const retellClient = new RetellWebClient();
      retellClientRef.current = retellClient;

      // Event handlers
      retellClient.on("call_started", () => {
        console.log("Call started");
        setIsCallActive(true);
        setIsConnecting(false);
        toast.success("Voice chat connected! Start speaking.");
      });

      retellClient.on("call_ended", () => {
        console.log("Call ended");
        setIsCallActive(false);
        setIsConnecting(false);
        toast.info("Voice chat ended");
      });

      retellClient.on("error", (error) => {
        console.error("Retell error:", error);
        setIsCallActive(false);
        setIsConnecting(false);
        toast.error("Call error: " + error.message);
      });

      // Start the call
      console.log("Starting Retell call...");
      await retellClient.startCall({
        accessToken: access_token,
      });

    } catch (error) {
      console.error("Failed to start call:", error);
      setIsConnecting(false);
      toast.error("Failed to start voice chat. Please try again.");
    }
  };

  const endCall = () => {
    if (retellClientRef.current) {
      retellClientRef.current.stopCall();
    }
    setIsCallActive(false);
  };

  const toggleMute = () => {
    if (retellClientRef.current) {
      if (isMuted) {
        retellClientRef.current.unmute();
      } else {
        retellClientRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="bg-card rounded-3xl shadow-premium overflow-hidden border-2 border-primary/20">
      <div className="bg-gradient-gold p-6 text-center">
        <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-2">
          Voice Chat with Aroma Luxe AI
        </h3>
        <p className="text-primary-foreground/80">
          Speak with our AI assistant about perfumes, shipping, and workshops
        </p>
      </div>

      <div className="p-8 text-center">
        {!isCallActive && !isConnecting && (
          <div>
            <div className="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-gold-glow">
              <Phone className="h-12 w-12 text-primary-foreground" />
            </div>
            <Button 
              onClick={startCall}
              className="btn-luxury text-lg px-8 py-6"
            >
              <Phone className="mr-2 h-5 w-5" />
              Start Voice Chat
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Click to start a voice conversation with our AI assistant
            </p>
          </div>
        )}

        {isConnecting && (
          <div>
            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Phone className="h-12 w-12 text-primary" />
            </div>
            <p className="text-primary font-medium text-lg">Connecting...</p>
          </div>
        )}

        {isCallActive && (
          <div>
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Mic className="h-12 w-12 text-white" />
            </div>
            <p className="text-green-600 font-medium text-lg mb-6">Call Active - Speak Now</p>
            
            <div className="flex gap-4 justify-center">
              <Button
                onClick={toggleMute}
                variant="outline"
                className="px-6 py-6"
              >
                {isMuted ? (
                  <><MicOff className="mr-2 h-5 w-5" /> Unmute</>
                ) : (
                  <><Mic className="mr-2 h-5 w-5" /> Mute</>
                )}
              </Button>
              
              <Button
                onClick={endCall}
                variant="destructive"
                className="px-6 py-6"
              >
                <PhoneOff className="mr-2 h-5 w-5" />
                End Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RetellVoiceChat;
